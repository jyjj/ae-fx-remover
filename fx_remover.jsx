var comp = app.project.activeItem;

if (comp && comp instanceof CompItem) {
    app.beginUndoGroup("Remove All Effects from Selected Layers");

    for (var i = 0; i < comp.selectedLayers.length; i++) {
        var layer = comp.selectedLayers[i];

        while (layer.property("Effects").numProperties > 0) {
            layer.property("Effects").property(1).remove();
        }
    }

    app.endUndoGroup();
} else {
    alert("アクティブなコンポジションがありません。");
}