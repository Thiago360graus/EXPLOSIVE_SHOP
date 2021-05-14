(function(){
    var script = {
 "definitions": [{
 "from": "left",
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "duration": 400
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7EB7CC51_6B64_19A5_41D3_460DF8B36B39",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_7E87AC5C_6B64_19A3_41A3_8A6F67E1FAD9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884",
 "thumbnailUrl": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_t.jpg",
 "label": "07",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D197FE4_5CD6_F87D_41CA_46192E71F249",
  "this.overlay_4ED66BCA_5CD5_18B5_41B3_E63D3388D577",
  "this.overlay_4E8A9708_5CD5_29B6_41CE_BC106809AD2B",
  "this.overlay_725BA6D8_5D5D_2856_41D0_67630C79B548",
  "this.overlay_728842DD_5D5D_684E_41C6_AE90D0C23296",
  "this.overlay_72A8EAD0_5D5D_7855_41CE_959935239A54"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7EC83C30_6B64_19E4_41D1_162F197BDAA5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_6C46EE96_612E_5C08_41D5_756E10209A3D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_camera"
  },
  {
   "media": "this.panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_camera"
  },
  {
   "media": "this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_camera"
  },
  {
   "media": "this.panorama_563CE799_5CB5_68D7_41B5_559867884412",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_563CE799_5CB5_68D7_41B5_559867884412_camera"
  },
  {
   "media": "this.panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_camera"
  },
  {
   "media": "this.panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_camera"
  },
  {
   "media": "this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_camera"
  },
  {
   "media": "this.panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_camera"
  },
  {
   "media": "this.panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE",
   "camera": "this.panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "from": "left",
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "duration": 400
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE",
 "thumbnailUrl": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_t.jpg",
 "label": "09",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D79F0B5_5CD5_28DF_41CA_8191E1739A58",
  "this.overlay_4EC604CC_5CD5_E84D_41B8_8B21FE312E6A",
  "this.overlay_723CAAA7_5D5D_18FB_41D6_1A5A1D15B55E"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "items": [
  {
   "media": "this.video_757DBE3A_61E1_DC7B_41D0_64D37E1CC125",
   "start": "this.viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7E334BE8_6B64_1E63_41D6_AF7B12DA7A20, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E334BE8_6B64_1E63_41D6_AF7B12DA7A20, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7VideoPlayer)",
   "player": "this.viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7VideoPlayer"
  }
 ],
 "id": "playList_7E334BE8_6B64_1E63_41D6_AF7B12DA7A20",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794",
 "thumbnailUrl": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_t.jpg",
 "label": "08",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D151CB3_5CD5_18DA_41D3_B9B9C1A5CA24",
  "this.overlay_722A86D6_5D5D_685D_41CB_E13FD69BB1A2",
  "this.overlay_723C69DA_5D5D_184A_41C3_C2BABE2406AD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.14,
  "class": "PanoramaCameraPosition",
  "pitch": -0.59
 },
 "id": "panorama_563CE799_5CB5_68D7_41B5_559867884412_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "179824372_476659520249671_6163852732124251852_n",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_757DBE3A_61E1_DC7B_41D0_64D37E1CC125_t.jpg",
 "width": 720,
 "loop": false,
 "id": "video_757DBE3A_61E1_DC7B_41D0_64D37E1CC125",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_757DBE3A_61E1_DC7B_41D0_64D37E1CC125.mp4"
 }
},
{
 "from": "right",
 "id": "effect_255B4C65_0AEF_452B_417C_88DA499385F1",
 "easing": "linear",
 "class": "SlideInEffect",
 "duration": 0
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "close": "this.playList_7E334BE8_6B64_1E63_41D6_AF7B12DA7A20.set('selectedIndex', -1);; this.resumeGlobalAudios('window_70FAF4EB_612F_CC18_41BB_754D7FFE055F')",
 "id": "window_70FAF4EB_612F_CC18_41BB_754D7FFE055F",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "modal": true,
 "bodyPaddingTop": 5,
 "width": "90%",
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "veilColorDirection": "horizontal",
 "closeButtonBorderColor": "#FF0000",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "title": "@barbearia_explosive_shop",
 "titleFontSize": "58px",
 "headerBackgroundColorDirection": "vertical",
 "height": "100%",
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [
  "#000000",
  "#000000",
  "#FFFF00",
  "#FFFF00"
 ],
 "titleFontWeight": "bold",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_700314EA_612F_CC18_41BC_436BDB8F11B7",
  "this.viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 40,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF0000",
 "headerBorderColor": "#FF0000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "headerPaddingTop": 5,
 "closeButtonPaddingLeft": 0,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [
  0,
  0,
  0,
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 40,
 "data": {
  "name": "Window3892"
 },
 "bodyBorderColor": "#000000",
 "footerBorderSize": 0
},
{
 "items": [
  {
   "media": "this.video_757DBE3A_61E1_DC7B_41D0_64D37E1CC125",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7E365BE9_6B64_1E65_41D3_0C50756F9B7C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E365BE9_6B64_1E65_41D3_0C50756F9B7C, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7E365BE9_6B64_1E65_41D3_0C50756F9B7C",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.99,
  "class": "PanoramaCameraPosition",
  "pitch": -3.59
 },
 "id": "panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.16,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "id": "camera_7EE97C1A_6B64_19A4_41D8_283BA1F8ADBB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_6654764A_6B63_E9A7_41D9_3816BA025A81",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "modal": true,
 "bodyPaddingTop": 5,
 "width": "90%",
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "veilColorDirection": "horizontal",
 "closeButtonBorderColor": "#FF0000",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "title": "",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": "100%",
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [
  "#FFFF00"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_6654B64A_6B63_E9A7_41D2_DDFD60108ADE",
  {
   "backgroundColorRatios": [],
   "width": "100%",
   "class": "WebFrame",
   "minHeight": 0,
   "shadow": false,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "scrollEnabled": true,
   "url": "//www.youtube.com/embed/gy_qrJ01djw",
   "minWidth": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "VideoUrl2450"
   }
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF3300",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 0,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window1943"
 },
 "footerBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.89,
  "class": "PanoramaCameraPosition",
  "pitch": -0.4
 },
 "id": "panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "183520280_1042139733219973_5201209703954432730_n",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_64014449_5D5B_2FB6_4191_4C42A992B036_t.jpg",
 "width": 640,
 "loop": false,
 "id": "video_64014449_5D5B_2FB6_4191_4C42A992B036",
 "class": "Video",
 "height": 1138,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 1138,
  "mp4Url": "media/video_64014449_5D5B_2FB6_4191_4C42A992B036.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -86.33,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_7EDA2C3B_6B64_19E4_41C2_59AE55E374AA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_7E91EC67_6B64_1A6D_41D5_02F8406262E8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563CE799_5CB5_68D7_41B5_559867884412"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_563D5A01_5CB5_7BB7_41BB_643784D70497",
 "thumbnailUrl": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_t.jpg",
 "label": "03",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D38B3D7_5CD7_E85A_41D4_DEDF557F8791",
  "this.overlay_4D396670_5CD7_2855_41C0_B50C4B2F2CA9",
  "this.overlay_727F62A3_5D5D_68FA_41D2_283904B8000F",
  "this.overlay_72965B45_5D5D_79BF_41D1_67AAD12DE045"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 6.59,
   "backwardYaw": -173.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6C46EE96_612E_5C08_41D5_756E10209A3D",
 "thumbnailUrl": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_t.jpg",
 "label": "01",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6CF1229D_612E_4439_41D1_6A69A23D4E47",
  "this.overlay_6CCB2F89_612E_BC18_41C7_606D52A465E3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.63,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_7E13EC04_6B64_19AC_41C5_19484F329A7D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F",
 "thumbnailUrl": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_t.jpg",
 "label": "06",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4ECC5A18_5CD7_1BD6_41BA_90619AB292CF",
  "this.overlay_7213B872_5D5D_185A_41D3_99F350306EF7",
  "this.overlay_72365FC4_5D5D_18BD_41D2_CBFA2BF28199",
  "this.overlay_70E5A51E_612F_CC3B_41D8_539915B5A0AD",
  "this.overlay_735FEE2E_6121_DC1B_41CF_EF6CCCB2C8D3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "duration": 400,
 "to": "left"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -173.02,
   "backwardYaw": 6.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6C46EE96_612E_5C08_41D5_756E10209A3D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F",
 "thumbnailUrl": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_t.jpg",
 "label": "02",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D3DD002_5CD7_27BA_41A0_68AB4DE1DD82",
  "this.overlay_4EEBDAFD_5CD7_184E_41B1_B15FBF0E3F91",
  "this.overlay_6DA35D98_5D5D_18D5_41D6_8DE3BCC6FF50"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563CE799_5CB5_68D7_41B5_559867884412"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC",
 "thumbnailUrl": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_t.jpg",
 "label": "05",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D06F883_5CD7_18BA_41C7_BBB443938DA9",
  "this.overlay_4EC28C4F_5CD7_384B_41D2_2943048F358E",
  "this.overlay_4EF627A6_5CD7_28FA_41C1_C52BFCF81EE2",
  "this.overlay_7210B621_5D5D_EBF6_41CB_E0A8B956B61B",
  "this.overlay_724E3DF5_5D5D_F85F_4194_A2681A53B186"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_7EF8DC25_6B64_19EC_41D5_CE231B99F16C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_734E7D81_61E2_5C08_41D7_6E5EE96FAC74.mp3",
  "oggUrl": "media/audio_734E7D81_61E2_5C08_41D7_6E5EE96FAC74.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_734E7D81_61E2_5C08_41D7_6E5EE96FAC74",
 "data": {
  "label": "y2mate.com - My Life Be Like Grits"
 }
},
{
 "items": [
  {
   "media": "this.video_64014449_5D5B_2FB6_4191_4C42A992B036",
   "start": "this.viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7E2ECBE5_6B64_1E6D_41D2_5813FAE6929A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E2ECBE5_6B64_1E6D_41D2_5813FAE6929A, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503VideoPlayer)",
   "player": "this.viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503VideoPlayer"
  }
 ],
 "id": "playList_7E2ECBE5_6B64_1E6D_41D2_5813FAE6929A",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_7E0B5BFA_6B64_1E67_41CE_E9F704B60D27",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_7BD6D7FA_0576_1361_417E_6BC3DC2079D0",
 "easing": "quad_in",
 "class": "FadeOutEffect",
 "duration": 1100
},
{
 "items": [
  {
   "media": "this.video_64014449_5D5B_2FB6_4191_4C42A992B036",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7E319BE9_6B64_1E65_419C_E9A904CF932E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E319BE9_6B64_1E65_419C_E9A904CF932E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7E319BE9_6B64_1E65_419C_E9A904CF932E",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.24,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_7EA5EC46_6B64_19AC_41D2_A1F3C80A17E3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_563CE799_5CB5_68D7_41B5_559867884412",
 "thumbnailUrl": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_t.jpg",
 "label": "04",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4E79CC59_5CD5_1857_41D4_018F37272711",
  "this.overlay_4D2482C2_5CD7_68BA_41C0_5CEBA4019EB1",
  "this.overlay_76E3A8C9_5D4F_78B7_41C8_FC8B3325B3AF",
  "this.overlay_723F1E7E_5D5D_184D_41D6_CA21DF7452A9",
  "this.overlay_72B70B3D_5D5D_19CE_41B5_12158B4C771E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.76,
  "class": "PanoramaCameraPosition",
  "pitch": -0.59
 },
 "id": "panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7E1FDC10_6B64_19A4_41BB_6825FFE20688",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "close": "this.playList_7E2ECBE5_6B64_1E6D_41D2_5813FAE6929A.set('selectedIndex', -1);; this.resumeGlobalAudios('window_6EBC46FF_6126_4DF8_41A6_4766EAC19220')",
 "id": "window_6EBC46FF_6126_4DF8_41A6_4766EAC19220",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "modal": true,
 "bodyPaddingTop": 5,
 "width": "90%",
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "veilColorDirection": "horizontal",
 "closeButtonBorderColor": "#FF0000",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "title": "@explosive_shop__",
 "titleFontSize": "58px",
 "headerBackgroundColorDirection": "vertical",
 "height": "100%",
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [
  "#000000",
  "#000000",
  "#FFFF00",
  "#FFFF00"
 ],
 "titleFontWeight": "bold",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_6EBE0700_6126_4C07_41CC_C2618BB9BF3E",
  "this.viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 40,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF0000",
 "headerBorderColor": "#FF0000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "headerPaddingTop": 5,
 "closeButtonPaddingLeft": 0,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [
  0,
  0,
  0,
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 40,
 "data": {
  "name": "Window3892"
 },
 "bodyBorderColor": "#000000",
 "footerBorderSize": 0
},
{
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "duration": 400,
 "to": "left"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "COLUNAL CENTRAL"
 },
 "children": [
  "this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
  "this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB"
 ],
 "layout": "absolute",
 "left": "0%",
 "width": 327.9,
 "scrollBarColor": "#000000",
 "id": "Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": "0%",
 "horizontalAlign": "center",
 "id": "Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
 "class": "Image",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_74B2519C_057D_EFA1_4189_30B4540E35EA.png",
 "minWidth": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fill",
 "propagateClick": false,
 "data": {
  "name": "FUNDO PRETO"
 }
},
{
 "id": "Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
 "left": "22%",
 "horizontalAlign": "center",
 "class": "Image",
 "minHeight": 600,
 "shadow": false,
 "borderSize": 0,
 "right": "8.7%",
 "url": "skin/Image_4B796E6E_054E_F561_4174_FDFB6E8DF664.png",
 "minWidth": 600,
 "maxWidth": 1000,
 "maxHeight": 801,
 "bottom": "10.22%",
 "verticalAlign": "middle",
 "top": "5%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA, false, 0, this.effect_7BD6D7FA_0576_1361_417E_6BC3DC2079D0, 'hideEffect', false); this.setComponentVisibility(this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664, false, 0, this.effect_7BD6D7FA_0576_1361_417E_6BC3DC2079D0, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_255B4C65_0AEF_452B_417C_88DA499385F1, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703, true, 0, this.effect_255B4C65_0AEF_452B_417C_88DA499385F1, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_255B4C65_0AEF_452B_417C_88DA499385F1, 'showEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "TEXTO INICIAL"
 }
},
{
 "width": 80,
 "id": "IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": "9.23%",
 "transparencyActive": true,
 "minWidth": 0,
 "iconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 74,
 "top": "3.28%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.21,
   "image": "this.AnimatedImageResource_76F061E6_5D4B_287A_41CD_C2E33A53602F",
   "pitch": -36.78,
   "yaw": -85.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D197FE4_5CD6_F87D_41CA_46192E71F249",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.21,
   "yaw": -85.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.92,
   "image": "this.AnimatedImageResource_76F0B1E6_5D4B_287A_41D6_07D107582966",
   "pitch": -28.27,
   "yaw": 73.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE, this.camera_7EC83C30_6B64_19E4_41D1_162F197BDAA5); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4ED66BCA_5CD5_18B5_41B3_E63D3388D577",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.92,
   "yaw": 73.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.59,
   "image": "this.AnimatedImageResource_76F071E6_5D4B_287A_41D3_4FB43A7A7E38",
   "pitch": -30.05,
   "yaw": 175.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4E8A9708_5CD5_29B6_41CE_BC106809AD2B",
 "maps": [
  {
   "hfov": 18.59,
   "yaw": 175.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 30.07,
 "yaw": 134.9,
 "id": "overlay_725BA6D8_5D5D_2856_41D0_67630C79B548",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 72.79,
 "yaw": 68.24,
 "id": "overlay_728842DD_5D5D_684E_41C6_AE90D0C23296",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.08,
 "yaw": -80.51,
 "id": "overlay_72A8EAD0_5D5D_7855_41CE_959935239A54",
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.88,
   "image": "this.AnimatedImageResource_76F0F1E7_5D4B_287A_41B8_DDD32201E351",
   "pitch": -28.47,
   "yaw": 87.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497, this.camera_7EDA2C3B_6B64_19E4_41C2_59AE55E374AA); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D79F0B5_5CD5_28DF_41CA_8191E1739A58",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.88,
   "yaw": 87.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.23,
   "image": "this.AnimatedImageResource_76F101E7_5D4B_287A_41D5_DF90C7798014",
   "pitch": -26.49,
   "yaw": -176.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884, this.camera_7EA5EC46_6B64_19AC_41D2_A1F3C80A17E3); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EC604CC_5CD5_E84D_41B8_8B21FE312E6A",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.23,
   "yaw": -176.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 69.82,
 "yaw": 157.25,
 "id": "overlay_723CAAA7_5D5D_18FB_41D6_1A5A1D15B55E",
 "bleachingDistance": 0.4
},
{
 "viewerArea": "this.viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7",
 "id": "viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.34,
   "image": "this.AnimatedImageResource_76F0B1E6_5D4B_287A_41D5_9D041C78789A",
   "pitch": -36.18,
   "yaw": 170.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884, this.camera_7E13EC04_6B64_19AC_41C5_19484F329A7D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D151CB3_5CD5_18DA_41D3_B9B9C1A5CA24",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.34,
   "yaw": 170.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 73.19,
 "yaw": -43.91,
 "id": "overlay_722A86D6_5D5D_685D_41CB_E13FD69BB1A2",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 40.75,
 "yaw": -171.1,
 "id": "overlay_723C69DA_5D5D_184A_41C3_C2BABE2406AD",
 "bleachingDistance": 0.4
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_700314EA_612F_CC18_41BC_436BDB8F11B7",
 "class": "HTMLText",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText3893"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "89%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea3568"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_6654B64A_6B63_E9A7_41D2_DDFD60108ADE",
 "class": "HTMLText",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText1944"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.13,
   "image": "this.AnimatedImageResource_76EDD1E5_5D4B_287E_41A5_A9AF24C36AD4",
   "pitch": -32.42,
   "yaw": -2.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D38B3D7_5CD7_E85A_41D4_DEDF557F8791",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.13,
   "yaw": -2.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.52,
   "image": "this.AnimatedImageResource_76EE61E5_5D4B_287E_41B2_4C37C4C621A3",
   "pitch": -30.45,
   "yaw": 174.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F, this.camera_7EE97C1A_6B64_19A4_41D8_283BA1F8ADBB); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D396670_5CD7_2855_41C0_B50C4B2F2CA9",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.52,
   "yaw": 174.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 64.09,
 "yaw": 150.73,
 "id": "overlay_727F62A3_5D5D_68FA_41D2_283904B8000F",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 29.27,
 "yaw": 86.64,
 "id": "overlay_72965B45_5D5D_79BF_41D1_67AAD12DE045",
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.59,
   "image": "this.AnimatedImageResource_71A602D1_6122_4408_41CD_D0EF39E28F35",
   "pitch": -30.05,
   "yaw": 6.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F, this.camera_7E1FDC10_6B64_19A4_41BB_6825FFE20688); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6CF1229D_612E_4439_41D1_6A69A23D4E47",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.59,
   "yaw": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.49,
   "image": "this.AnimatedImageResource_74F51D5E_6122_5C38_4183_63CC2079B428",
   "pitch": 4.35,
   "yaw": -22.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showWindow(this.window_6EBC46FF_6126_4DF8_41A6_4766EAC19220, null, true); this.playList_7E2ECBE5_6B64_1E6D_41D2_5813FAE6929A.set('selectedIndex', 0); ; this.viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503VideoPlayer.play(); ; this.pauseGlobalAudios('window_6EBC46FF_6126_4DF8_41A6_4766EAC19220')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6CCB2F89_612E_BC18_41C7_606D52A465E3",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.49,
   "yaw": -22.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.33,
   "image": "this.AnimatedImageResource_76F021E6_5D4B_287A_41D1_D752DC227347",
   "pitch": -31.44,
   "yaw": -174.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC, this.camera_7E0B5BFA_6B64_1E67_41CE_E9F704B60D27); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4ECC5A18_5CD7_1BD6_41BA_90619AB292CF",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.33,
   "yaw": -174.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 81.1,
 "yaw": 1.38,
 "id": "overlay_7213B872_5D5D_185A_41D3_99F350306EF7",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 64.09,
 "yaw": 176.64,
 "id": "overlay_72365FC4_5D5D_18BD_41D2_CBFA2BF28199",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 26.13,
   "image": "this.AnimatedImageResource_70A8A43A_6126_4C78_41C6_CE1D0C3F9076",
   "pitch": -28.98,
   "yaw": 5.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showWindow(this.window_70FAF4EB_612F_CC18_41BB_754D7FFE055F, null, true); this.playList_7E334BE8_6B64_1E63_41D6_AF7B12DA7A20.set('selectedIndex', 0); ; this.viewer_uid7E332BE8_6B64_1E63_4191_9F524F7893E7VideoPlayer.play(); ; this.pauseGlobalAudios('window_70FAF4EB_612F_CC18_41BB_754D7FFE055F')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70E5A51E_612F_CC3B_41D8_539915B5A0AD",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.13,
   "yaw": 5.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0_HS_2_0.png",
      "width": 581,
      "class": "ImageResourceLevel",
      "height": 526
     }
    ]
   },
   "hfov": 20.27,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 14.65,
   "yaw": 36.58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('http://api.whatsapp.com/send?phone=5553991174230', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_735FEE2E_6121_DC1B_41CF_EF6CCCB2C8D3",
 "data": {
  "label": "Imagem"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.27,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.59,
   "image": "this.AnimatedImageResource_76ED51E5_5D4B_287E_41B6_AC189E5166D6",
   "pitch": -30.05,
   "yaw": 8.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D3DD002_5CD7_27BA_41A0_68AB4DE1DD82",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.59,
   "yaw": 8.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.47,
   "image": "this.AnimatedImageResource_76ED81E5_5D4B_287E_41BD_E058730EE42B",
   "pitch": -35.59,
   "yaw": -173.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C46EE96_612E_5C08_41D5_756E10209A3D, this.camera_7EB7CC51_6B64_19A5_41D3_460DF8B36B39); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EEBDAFD_5CD7_184E_41B1_B15FBF0E3F91",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.47,
   "yaw": -173.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.69,
 "yaw": 20.37,
 "id": "overlay_6DA35D98_5D5D_18D5_41D6_8DE3BCC6FF50",
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.23,
   "image": "this.AnimatedImageResource_76EF01E5_5D4B_287E_41BB_81EC71AD6416",
   "pitch": -40.93,
   "yaw": 7.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D06F883_5CD7_18BA_41C7_BBB443938DA9",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.23,
   "yaw": 7.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.09,
   "image": "this.AnimatedImageResource_76EF51E6_5D4B_287A_41C6_D59C98A9AE0F",
   "pitch": -32.62,
   "yaw": 95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EC28C4F_5CD7_384B_41D2_2943048F358E",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.09,
   "yaw": 95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.39,
   "image": "this.AnimatedImageResource_76EF91E6_5D4B_287A_41B7_6BE9DFDE8B3F",
   "pitch": -25.5,
   "yaw": -178.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563CE799_5CB5_68D7_41B5_559867884412, this.camera_7EF8DC25_6B64_19EC_41D5_CE231B99F16C); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EF627A6_5CD7_28FA_41C1_C52BFCF81EE2",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -178.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 44.51,
 "yaw": 6.92,
 "id": "overlay_7210B621_5D5D_EBF6_41CB_E0A8B956B61B",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 70.22,
 "yaw": 170.9,
 "id": "overlay_724E3DF5_5D5D_F85F_4194_A2681A53B186",
 "bleachingDistance": 0.4
},
{
 "viewerArea": "this.viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503",
 "id": "viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.48,
   "image": "this.AnimatedImageResource_76EEB1E5_5D4B_287E_41CF_5576FE04215C",
   "pitch": -30.64,
   "yaw": 8.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4E79CC59_5CD5_1857_41D4_018F37272711",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.48,
   "yaw": 8.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.95,
   "image": "this.AnimatedImageResource_76EEE1E5_5D4B_287E_41D4_B593573472D7",
   "pitch": -21.74,
   "yaw": -175,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563D5A01_5CB5_7BB7_41BB_643784D70497, this.camera_7E91EC67_6B64_1A6D_41D5_02F8406262E8); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D2482C2_5CD7_68BA_41C0_5CEBA4019EB1",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.95,
   "yaw": -175,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.7,
   "image": "this.AnimatedImageResource_6F5CCD5E_5D4D_184D_41CD_B6652FF9ED58",
   "pitch": -29.46,
   "yaw": 108.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE, this.camera_7E87AC5C_6B64_19A3_41A3_8A6F67E1FAD9); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_76E3A8C9_5D4F_78B7_41C8_FC8B3325B3AF",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.7,
   "yaw": 108.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 61.91,
 "yaw": 165.96,
 "id": "overlay_723F1E7E_5D5D_184D_41D6_CA21DF7452A9",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 58.75,
 "yaw": 17.6,
 "id": "overlay_72B70B3D_5D5D_19CE_41B5_12158B4C771E",
 "bleachingDistance": 0.4
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_6EBE0700_6126_4C07_41CC_C2618BB9BF3E",
 "class": "HTMLText",
 "minHeight": 0,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "10%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText3893"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "viewer_uid7E2E8BE6_6B64_1E6F_41D9_9487E3DB5503",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "89%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea3567"
 }
},
{
 "data": {
  "name": "COLUNINHA"
 },
 "children": [
  "this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
  "this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726"
 ],
 "layout": "absolute",
 "left": "0%",
 "width": 90,
 "scrollBarColor": "#000000",
 "id": "Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "EXPAN\u00c7\u00c3O"
 },
 "children": [
  "this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
  "this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA"
 ],
 "layout": "absolute",
 "width": 330,
 "scrollBarColor": "#000000",
 "id": "Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F061E6_5D4B_287A_41CD_C2E33A53602F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F0B1E6_5D4B_287A_41D6_07D107582966",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F071E6_5D4B_287A_41D3_4FB43A7A7E38",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563AF2BD_5CB5_28CF_41C6_4BD29109D884_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F0F1E7_5D4B_287A_41B8_DDD32201E351",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F101E7_5D4B_287A_41D5_DF90C7798014",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5636CDC9_5CBA_F8B7_41C7_158C470407EE_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F0B1E6_5D4B_287A_41D5_9D041C78789A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5635904A_5CBA_E7B5_41AC_037CF8FC8794_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EDD1E5_5D4B_287E_41A5_A9AF24C36AD4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EE61E5_5D4B_287E_41B2_4C37C4C621A3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563D5A01_5CB5_7BB7_41BB_643784D70497_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71A602D1_6122_4408_41CD_D0EF39E28F35",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_74F51D5E_6122_5C38_4183_63CC2079B428",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C46EE96_612E_5C08_41D5_756E10209A3D_0_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76F021E6_5D4B_287A_41D1_D752DC227347",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_70A8A43A_6126_4C78_41C6_CE1D0C3F9076",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579BCEA6_5CB5_38FD_41C4_F1D1CD8BB47F_0_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76ED51E5_5D4B_287E_41B6_AC189E5166D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76ED81E5_5D4B_287E_41BD_E058730EE42B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56314D2E_5CB5_19CD_41CC_5DC39EA9E27F_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EF01E5_5D4B_287E_41BB_81EC71AD6416",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EF51E6_5D4B_287A_41C6_D59C98A9AE0F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EF91E6_5D4B_287A_41B7_6BE9DFDE8B3F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563D75F2_5CB5_2855_41D0_18FC56693AEC_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EEB1E5_5D4B_287E_41CF_5576FE04215C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_76EEE1E5_5D4B_287E_41D4_B593573472D7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6F5CCD5E_5D4D_184D_41CD_B6652FF9ED58",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_563CE799_5CB5_68D7_41B5_559867884412_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "layout": "absolute",
 "id": "Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
 "left": "0%",
 "width": 36,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726",
 "left": 10,
 "width": 70,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 70,
 "iconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726.png",
 "maxHeight": 80,
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726_rollover.png",
 "propagateClick": true,
 "data": {
  "name": "BOT\u00c3O ABRIR"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6"
 ],
 "layout": "absolute",
 "id": "Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "90%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA",
 "width": 70,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 9,
 "transparencyActive": true,
 "minWidth": 70,
 "maxWidth": 70,
 "iconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA.png",
 "maxHeight": 50,
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA_rollover.png",
 "propagateClick": true,
 "data": {
  "name": "BOTAO FECHAR"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
  "this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
  "this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
  "this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
  "this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9"
 ],
 "layout": "absolute",
 "id": "Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 40,
 "paddingLeft": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
 "left": "7.74%",
 "horizontalAlign": "center",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "right": "0.09%",
 "url": "skin/Image_24C775DA_04F6_37A1_4180_D80ED41939F9.png",
 "minWidth": 200,
 "maxWidth": 400,
 "maxHeight": 2268,
 "bottom": "0%",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "REDES VERTICAL"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "shadow": false,
 "right": "0%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": "33.47%",
 "progressBarOpacity": 1,
 "top": "50.69%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://www.facebook.com/lojaderoupas97/', '_blank')",
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer 2"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "shadow": false,
 "right": "0.46%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": "0%",
 "progressBarOpacity": 1,
 "top": "73.5%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://www.instagram.com/explosive_shop__/', '_blank')",
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer 2"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
 "left": "0.41%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "shadow": false,
 "right": "0.46%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": "53.66%",
 "progressBarOpacity": 1,
 "top": "28.19%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.showWindow(this.window_6654764A_6B63_E9A7_41D9_3816BA025A81, null, false)",
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer 2"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "shadow": false,
 "right": "0%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": "75.29%",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5553981433810', '_blank')",
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer 2"
 }
}],
 "start": "this.playAudioList([this.audio_734E7D81_61E2_5C08_41D7_6E5EE96FAC74]); this.init()",
 "data": {
  "name": "Player1098"
 },
 "children": [
  "this.MainViewer",
  "this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
  "this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
  "this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
  "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
