import React from "react";
import SpringModal from "../../../common/SpringModalComponent";
import {IPluginDetailModalProps} from "../../../../models/admin/AdminPluginsModel";

const PluginDetailModal = React.memo((props: IPluginDetailModalProps) => {
    // const classes = useUninstallModalStyles();
    const {openDetailsModal, handleDetailsModal} = props;

    return (
        <SpringModal
            openModal={openDetailsModal}
            handleModal={handleDetailsModal}
        >
                <span>
                    Plugin details
                </span>
        </SpringModal>
    )
});

export default PluginDetailModal;
