import React from "react";
import Button from "@material-ui/core/Button";
import {IPluginDetailButtonsProps} from "../../../../models/admin/AdminPluginsModel";
import {usePluginDetailButtonsStyle} from "../../../../assets/material/AdminAsset";

const PluginDetailButtons = (props: IPluginDetailButtonsProps) => {
    const classes = usePluginDetailButtonsStyle();
    const {actionButtons, InstallPlugin, ActivatePlugin, handleDetailsModal, handleConfigureModal, handleUninstallModal} = props;

    return (
       <>
           {
               actionButtons.includes('install')
               &&
               <Button
                   size="medium"
                   variant="outlined"
                   color='primary'
                   className={classes.button}
                   onClick={InstallPlugin}
               >
                   Install
               </Button>
           }
           {
               actionButtons.includes('uninstall')
               &&
               <Button
                   size="medium"
                   variant="outlined"
                   color='primary'
                   className={classes.button}
                   onClick={() => handleUninstallModal(true)}
               >
                   Uninstall
               </Button>
           }
           {
               actionButtons.includes('details')
               &&
               <Button
                   size="medium"
                   variant="outlined"
                   color='primary'
                   className={classes.button}
                   onClick={() => handleDetailsModal(true)}
               >
                   Details
               </Button>
           }
           {
               actionButtons.includes('configure')
               &&
               <Button
                   size="medium"
                   variant="outlined"
                   color='primary'
                   className={classes.button}
                   onClick={() => handleConfigureModal(true)}
               >
                   Configure
               </Button>
           }
           {
               actionButtons.includes('activate')
               &&
               <Button
                   size="medium"
                   variant="outlined"
                   color='primary'
                   className={classes.button}
                   onClick={ActivatePlugin}
               >
                   Activate
               </Button>
           }
       </>
    )
};

export default PluginDetailButtons;
