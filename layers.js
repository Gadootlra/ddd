var wms_layers = [];

var format_tree_1_0 = new ol.format.GeoJSON();
var features_tree_1_0 = format_tree_1_0.readFeatures(json_tree_1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tree_1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tree_1_0.addFeatures(features_tree_1_0);
var lyr_tree_1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tree_1_0, 
                style: style_tree_1_0,
                interactive: true,
                title: '<img src="styles/legend/tree_1_0.png" /> tree_1'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> الاقسام'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الحمامات'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> القاعات'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___4, 
                style: style___4,
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> المدخل_الغربي'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> المراسم'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> المساجد'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> المصلى'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> المعامل'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> الورش'
            });
var format___10 = new ol.format.GeoJSON();
var features___10 = format___10.readFeatures(json___10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___10.addFeatures(features___10);
var lyr___10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___10, 
                style: style___10,
                interactive: true,
                title: '<img src="styles/legend/__10.png" /> حدائق_صغيره'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> طريق'
            });
var format___12 = new ol.format.GeoJSON();
var features___12 = format___12.readFeatures(json___12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___12.addFeatures(features___12);
var lyr___12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___12, 
                style: style___12,
                interactive: true,
                title: '<img src="styles/legend/__12.png" /> مجمع_القاعات'
            });
var format___13 = new ol.format.GeoJSON();
var features___13 = format___13.readFeatures(json___13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___13.addFeatures(features___13);
var lyr___13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___13, 
                style: style___13,
                interactive: true,
                title: '<img src="styles/legend/__13.png" /> مكاتب_الادارات'
            });
var format___14 = new ol.format.GeoJSON();
var features___14 = format___14.readFeatures(json___14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___14.addFeatures(features___14);
var lyr___14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___14, 
                style: style___14,
                interactive: true,
                title: '<img src="styles/legend/__14.png" /> مكتبة_القراءه'
            });
var format___15 = new ol.format.GeoJSON();
var features___15 = format___15.readFeatures(json___15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___15.addFeatures(features___15);
var lyr___15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___15, 
                style: style___15,
                interactive: true,
                title: '<img src="styles/legend/__15.png" /> مكتبه_الادوات'
            });
var format___16 = new ol.format.GeoJSON();
var features___16 = format___16.readFeatures(json___16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___16.addFeatures(features___16);
var lyr___16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___16, 
                style: style___16,
                interactive: true,
                title: '<img src="styles/legend/__16.png" /> مناطق_إضافيه'
            });
var format___17 = new ol.format.GeoJSON();
var features___17 = format___17.readFeatures(json___17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___17.addFeatures(features___17);
var lyr___17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___17, 
                style: style___17,
                interactive: true,
                title: '<img src="styles/legend/__17.png" /> مناطق_فارقه'
            });

lyr_tree_1_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr___4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr___10.setVisible(true);lyr__11.setVisible(true);lyr___12.setVisible(true);lyr___13.setVisible(true);lyr___14.setVisible(true);lyr___15.setVisible(true);lyr___16.setVisible(true);lyr___17.setVisible(true);
var layersList = [lyr_tree_1_0,lyr__1,lyr__2,lyr__3,lyr___4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr___10,lyr__11,lyr___12,lyr___13,lyr___14,lyr___15,lyr___16,lyr___17];
lyr_tree_1_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_القسم': 'اسم القسم', 'عدد_الطوابق': 'عدد الطوابق', 'عددالقاعات': 'عددالقاعات', 'عدد_المعامل': 'عدد المعامل', 'عدد_المكاتب': 'عدد المكاتب', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم__مكان_الحمامات': 'اسم/ مكان الحمامات', 'المداخل': 'المداخل', 'الابواب': 'الابواب', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'رقم_القاعة': 'رقم القاعة', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_البينشات': 'عدد البينشات', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_المكيفات': 'عدد المكيفات', 'إضافات_اخرى': 'إضافات اخرى', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المرسم': 'اسم المرسم', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_البينشات': 'عدد البينشات', 'عدد_المكيفات': 'عدد المكيفات', 'الإضافات': 'الإضافات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المسجد': 'اسم المسجد', 'الطوابق': 'الطوابق', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'مراوح_الهواء': 'مراوح الهواء', 'المكيفات': 'المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_مكان_المصلى': 'اسم/مكان المصلى', });
lyr__8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المعمل': 'اسم المعمل', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_المكيفات': 'عدد المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_الورشه': 'اسم الورشه', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_الحديقه': 'اسم الحديقه', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr___12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المجمع': 'اسم المجمع', 'عدد_الطوابق': 'عدد الطوابق', 'عدد_القاعات': 'عدد القاعات', 'عدد_المعامل': 'عدد المعامل', 'عدد_الابواب': 'عدد البواب', 'عدد_النوافذ': 'عدد النوافذ', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المكاتب': 'اسم المكاتب', 'المداخل': 'عدد المداخل', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'المكيفات': 'المكيفات', 'مراوح_الهواء': 'مراوح الهواء', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المكتبه': 'اسم المكتبه', 'الطوابق': 'الطوابق', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'مراوح_الهواء': 'مراوح الهواء', 'المكيفات': 'المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المكتبه': 'اسم المكتبه', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'مراوح_الهواء': 'مراوح الهواء', 'المكيفات': 'المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المنطقه': 'اسم المنطقه', 'عدد_المباني': 'عدد المباني', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_tree_1_0.set('fieldImages', {'OBJECTID': '', });
lyr__1.set('fieldImages', {'OBJECTID': '', 'اسم_القسم': '', 'عدد_الطوابق': '', 'عددالقاعات': '', 'عدد_المعامل': '', 'عدد_المكاتب': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__2.set('fieldImages', {'OBJECTID': '', 'اسم__مكان_الحمامات': '', 'المداخل': '', 'الابواب': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__3.set('fieldImages', {'OBJECTID': '', 'رقم_القاعة': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_البينشات': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'إضافات_اخرى': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___4.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__5.set('fieldImages', {'OBJECTID': '', 'اسم_المرسم': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_مراوح_الهواء': '', 'عدد_البينشات': '', 'عدد_المكيفات': '', 'الإضافات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__6.set('fieldImages', {'OBJECTID': '', 'اسم_المسجد': '', 'الطوابق': '', 'الابواب': '', 'النوافذ': '', 'مراوح_الهواء': '', 'المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__7.set('fieldImages', {'OBJECTID': '', 'اسم_مكان_المصلى': '', });
lyr__8.set('fieldImages', {'OBJECTID': '', 'اسم_المعمل': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__9.set('fieldImages', {'OBJECTID': '', 'اسم_الورشه': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___10.set('fieldImages', {'OBJECTID': '', 'اسم_الحديقه': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__11.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', });
lyr___12.set('fieldImages', {'OBJECTID': '', 'اسم_المجمع': '', 'عدد_الطوابق': '', 'عدد_القاعات': '', 'عدد_المعامل': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___13.set('fieldImages', {'OBJECTID': '', 'اسم_المكاتب': '', 'المداخل': '', 'الابواب': '', 'النوافذ': '', 'المكيفات': '', 'مراوح_الهواء': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___14.set('fieldImages', {'OBJECTID': '', 'اسم_المكتبه': '', 'الطوابق': '', 'الابواب': '', 'النوافذ': '', 'مراوح_الهواء': '', 'المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___15.set('fieldImages', {'OBJECTID': '', 'اسم_المكتبه': '', 'الابواب': '', 'النوافذ': '', 'مراوح_الهواء': '', 'المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___16.set('fieldImages', {'OBJECTID': '', 'اسم_المنطقه': '', 'عدد_المباني': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___17.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_tree_1_0.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_القسم': 'no label', 'عدد_الطوابق': 'no label', 'عددالقاعات': 'no label', 'عدد_المعامل': 'no label', 'عدد_المكاتب': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'no label', 'اسم__مكان_الحمامات': 'no label', 'المداخل': 'no label', 'الابواب': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'رقم_القاعة': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_البينشات': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'إضافات_اخرى': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___4.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__5.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المرسم': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_البينشات': 'no label', 'عدد_المكيفات': 'no label', 'الإضافات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__6.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المسجد': 'no label', 'الطوابق': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'مراوح_الهواء': 'no label', 'المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__7.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_مكان_المصلى': 'no label', });
lyr__8.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المعمل': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__9.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_الورشه': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___10.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_الحديقه': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__11.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr___12.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المجمع': 'no label', 'عدد_الطوابق': 'no label', 'عدد_القاعات': 'no label', 'عدد_المعامل': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___13.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المكاتب': 'no label', 'المداخل': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'المكيفات': 'no label', 'مراوح_الهواء': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___14.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المكتبه': 'no label', 'الطوابق': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'مراوح_الهواء': 'no label', 'المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___15.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المكتبه': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'مراوح_الهواء': 'no label', 'المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___16.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المنطقه': 'no label', 'عدد_المباني': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___17.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});