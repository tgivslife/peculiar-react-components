(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{130:function(n,e){n.exports=["# Progressive image\n\n## Basic\n\n",{type:"demo",data:"import React from 'react';\nimport { ProgressiveImage } from 'lib-react-components';\n\nexport default function Usage() {\n  return (\n    <ProgressiveImage\n      src=\"https://cdn-images-1.medium.com/max/1600/1*BY_IQj3mOIPXbrUUSZ6wGQ.jpeg\"\n      placeholder=\"https://cdn-images-1.medium.com/freeze/max/60/1*BY_IQj3mOIPXbrUUSZ6wGQ.jpeg?q=20\"\n    >\n      {(src, loading) => (\n        <img\n          src={src}\n          style={{\n            display: 'block',\n            maxWidth: 400,\n            width: '100%',\n            filter: loading ? 'blur(5px)' : 'none',\n          }}\n        />\n      )}\n    </ProgressiveImage>\n  );\n}\n",options:{demo:"/demos/progressive-image/basic.jsx",showCode:"true"}},"\n\n## Props\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| children\xa0* | func | \xa0 |  |\n| onError | func | function() {} | Fired when an error occurs when uploading a picture |\n| placeholder | string | '' | Path to preloaded image |\n| src | string | '' | Path to main image |\n"]}}]);
//# sourceMappingURL=sources-demos-progressive-image-index-md.fe5fa885.chunk.js.map