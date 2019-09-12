import React, {useEffect, useState} from "react";
import DetailTabContentComponent from "./DetailTabContentComponent";

interface IDetailTabContentContainerProps {
    tab: 'ui' | 'logic' | 'services'
}

let mockData = {
    'ui': [
        {
            name: 'ui',
            description: 'ui description'
        },
        {
            name: 'ui',
            description: 'ui description'
        },
        {
            name: 'ui',
            description: 'ui description'
        },
        {
            name: 'ui',
            description: 'ui description'
        }
    ],
    'logic': [
        {
            name: 'logic',
            description: 'logic description'
        },
        {
            name: 'logic',
            description: 'logic description'
        }
    ],
    'services': [
        {
            name: 'services',
            description: 'services description'
        },
        {
            name: 'services',
            description: 'services description'
        }
    ]
};

const DetailTabContentContainer = React.memo((props: IDetailTabContentContainerProps) => {
    const [data, useData] = useState([{name: '', description: ''}]);
    const {tab} = props;

    useEffect(() => useData(mockData[tab]), []);

    return <DetailTabContentComponent data={data} />
});

export default DetailTabContentContainer;
