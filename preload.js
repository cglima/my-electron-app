const { contextBridge, ipcRenderer } = require("electron");

// cria objetos globais para expor pro programa
contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke("ping"),
    // we can also expose variables, not just functions
});
