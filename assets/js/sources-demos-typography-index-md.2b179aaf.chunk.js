(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{154:function(n,o){n.exports=["# Typography\n\n## Types\n\n",{type:"demo",data:'import React from \'react\';\nimport { Typography } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <div>\n      <Typography type="h1">\n        Component h1\n      </Typography>\n      <Typography type="h2">\n        Component h2\n      </Typography>\n      <Typography type="h3">\n        Component h3\n      </Typography>\n      <Typography type="h4">\n        Component h4\n      </Typography>\n      <Typography type="h5">\n        Component h5\n      </Typography>\n      <Typography type="h6">\n        Component h6\n      </Typography>\n      <Typography type="b1">\n        Component b1\n      </Typography>\n      <Typography type="b2">\n        Component b2\n      </Typography>\n      <Typography type="b3">\n        Component b3\n      </Typography>\n      <Typography type="c1">\n        Component c1\n      </Typography>\n    </div>\n  );\n}\n',options:{demo:"/demos/typography/types.jsx",showCode:"true"}},"\n\n## Aligning\n\n",{type:"demo",data:"import React from 'react';\nimport { Typography } from 'lib-react-components';\n\nexport default function Usage() {\n  return (\n    <div>\n      <Typography>\n        Left\n      </Typography>\n      <Typography\n        align=\"center\"\n      >\n        Center\n      </Typography>\n      <Typography\n        align=\"right\"\n      >\n        Right\n      </Typography>\n    </div>\n  );\n}\n",options:{demo:"/demos/typography/aligning.jsx",showCode:"true"}},"\n\n## Resize\n\n",{type:"demo",data:'import React from \'react\';\nimport { Typography, DeviceProvider } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <DeviceProvider>\n      <Typography\n        type="h1"\n        tabletType="h3"\n        mobileType="h5"\n        color="primary"\n      >\n        Resize your window\n      </Typography>\n      <Typography\n        type="b1"\n        mobileType="b3"\n        color="wrong"\n      >\n        Mobile type only\n      </Typography>\n    </DeviceProvider>\n  );\n}\n',options:{demo:"/demos/typography/resize.jsx",showCode:"true"}},"\n\n## Resize in shell\n\n",{type:"demo",data:'import React, { Component } from \'react\';\nimport { Typography, AdaptShell } from \'lib-react-components\';\n\nexport default class Usage extends Component {\n  componentDidMount() { this.adapt = new AdaptShell(this.container); }\n  componentWillUnmount() { this.adapt.destroy(); }\n\n  render() {\n    return (\n      <div ref={(node) => { this.container = node; /* for example isolation */ }}>\n        <Typography\n          type="h1"\n          tabletType="h3"\n          mobileType="h5"\n          color="primary"\n        >\n          Resize your window\n        </Typography>\n        <Typography\n          type="b1"\n          mobileType="b3"\n          color="wrong"\n        >\n          Mobile type only\n        </Typography>\n      </div>\n    );\n  }\n}\n',options:{demo:"/demos/typography/resize_in_shell.jsx",showCode:"true"}},"\n\n## Customized\n\n",{type:"demo",data:'import React from \'react\';\nimport { Typography } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <div>\n      <Typography\n        color="primary"\n      >\n        Color primary\n      </Typography>\n      <Typography\n        color="wrong"\n      >\n        Color wrong\n      </Typography>\n      <Typography\n        color="success"\n      >\n        Color success\n      </Typography>\n    </div>\n  );\n}\n',options:{demo:"/demos/typography/customized.jsx",showCode:"true"}},"\n\n## Props\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| align | enum: 'left' &#124;<br> 'center' &#124;<br> 'right' &#124;<br> 'auto'<br> | 'left' | Component content aligment |\n| children\xa0* | node | \xa0 | This is what will be displayed inside the button |\n| className | string | '' | The CSS class name of the root element |\n| color | string | 'black' | Component color from theme |\n| mobileType | textTypePropType | '' | Typography type for mobile |\n| tabletType | textTypePropType | '' | Typography type for tablet |\n| type | textTypePropType | 'b1' | Typography type |\n"]}}]);
//# sourceMappingURL=sources-demos-typography-index-md.2b179aaf.chunk.js.map