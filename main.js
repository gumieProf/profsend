// �A�v���P�[�V�����쐬�p�̃��W���[����ǂݍ���
const {app, BrowserWindow} = require('electron');
 
// ���C���E�B���h�E
let mainWindow;
 
function createWindow() {
  // ���C���E�B���h�E���쐬���܂�
  mainWindow = new BrowserWindow({width: 800, height: 600});
 
  // ���C���E�B���h�E�ɕ\������URL���w�肵�܂�
  // �i�����main.js�Ɠ����f�B���N�g����index.html�j
  mainWindow.loadFile('index.html');
 
  // �f�x���b�p�[�c�[���̋N��
  mainWindow.webContents.openDevTools();
 
  // ���C���E�B���h�E������ꂽ�Ƃ��̏���
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
 
//  �������������������̏���
app.on('ready', createWindow);
 
// �S�ẴE�B���h�E�������Ƃ��̏���
app.on('window-all-closed', () => {
  // macOS�̂Ƃ��ȊO�̓A�v���P�[�V�������I�������܂�
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// �A�v���P�[�V�������A�N�e�B�u�ɂȂ������̏���(Mac���ƁADock���N���b�N���ꂽ���j
app.on('activate', () => {
  // ���C���E�B���h�E�������Ă���ꍇ�͍ēx���C���E�B���h�E���쐬����
  if (mainWindow === null) {
    createWindow();
  }
});