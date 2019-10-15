var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/../build')));

app.post('/install-plugin', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log('heeeeeeeeeee ')
    const { exec } = require('child_process');

    var path = require('path');
    var root = path.resolve(__dirname);

    if (path === 'test') {
        console.log('yes')
    }

    console.log('ROOT: ',root);

    exec('cd '+root+'/../src/components && git clone https://gitlab+deploy-token-1:QuVHJ8sBeMBPJiB1pSEA@gitlab.risk.az/javidm/test-pack.git', (err, stdout, stderr) => {
        // exec('cd '+root+'/../src/components/test-pack && git fetch https://gitlab+deploy-token-1:GdA2Ed-G5NwzyJPJqaJP@gitlab.risk.az/javidm/test-pack.git && git reset --hard origin/master', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('REBUILD');
    });


    res.json({ custom: 'response' });

    if (process.env.NODE_ENV === 'dev') {

    }
    else if (process.env.NODE_ENV === 'prod') {

        exec('npm run build');
    }
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(9000, () => {

    console.log('Server running on 9000');
});
