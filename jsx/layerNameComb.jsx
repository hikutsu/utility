/**
 * 同じレイヤー名で結合
 *
 */
var docObj = activeDocument;
var text = prompt("表示するレイヤー名を入力","glow")

nameLayerComp();
alert('merge complete');

function nameLayerComp() {
  for(i=0; i<docObj.artLayers.length; i++){
    docObj.layers[i].visible = false;
    if(docObj.artLayers[i].name == text){
    // if(docObj.artLayers[i].name == "glow"){
      docObj.layers[i].visible = true;
    }
  }
    docObj.mergeVisibleLayers();
}
