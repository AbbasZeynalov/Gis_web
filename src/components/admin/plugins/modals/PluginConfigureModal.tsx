import React from "react";
import SpringModal from "../../../common/SpringModalComponent";
import {IPluginConfigureModalProps} from "../../../../models/admin/AdminPluginsModel";

const PluginConfigureModal = React.memo((props: IPluginConfigureModalProps) => {
    // const classes = useUninstallModalStyles();
    const {openConfigureModal, handleConfigureModal} = props;

    return (
        <SpringModal
            openModal={openConfigureModal}
            handleModal={handleConfigureModal}
        >
                <span>
                    Plugin configure
                </span>
        </SpringModal>
    )
});

export default PluginConfigureModal;
