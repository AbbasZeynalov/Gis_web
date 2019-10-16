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
    var filePath = 'cd '+root+'/../src/components';

    if (path === 'test') {
        console.log('yes')
    }

    console.log('ROOT: ',root);

    exec(
        filePath + ' && git clone https://gitlab+deploy-token-4:TmBSbpSm3eZzE3xtuyf4@gitlab.risk.az/abbasz/test',
        (err, stdout, stderr) => {
        if (err) {
            // console.error(err);
            res.json({ success: false });
            // return;
        }

        res.json({ success: true });

        console.log('REBUILD');
    });

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
