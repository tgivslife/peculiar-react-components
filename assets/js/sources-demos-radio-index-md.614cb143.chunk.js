(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{116:function(n,e){n.exports=["# Radio\n\n## Stroke\n\n",{type:"demo",data:'import React from \'react\';\nimport { RadioGroup, Radio } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <RadioGroup name="numbers" defaultValue="1">\n      <Radio\n        value="1"\n        style={{\n          marginRight: 10,\n        }}\n        bgType="stroke"\n        iconColorOn="primary"\n      />\n      <Radio\n        value="2"\n        style={{\n          marginRight: 10,\n        }}\n        bgType="stroke"\n        iconColorOn="primary"\n      />\n      <Radio\n        value="3"\n        disabled\n        bgType="stroke"\n        iconColorOn="primary"\n      />\n    </RadioGroup>\n  );\n}\n\n',options:{demo:"/demos/radio/stroke.jsx",showCode:"true"}},"\n\n## Fill\n\n",{type:"demo",data:'import React from \'react\';\nimport { RadioGroup, Radio } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <RadioGroup name="numbers" defaultValue="1">\n      <Radio\n        value="1"\n        style={{\n          marginRight: 10,\n        }}\n      />\n      <Radio\n        value="2"\n        style={{\n          marginRight: 10,\n        }}\n      />\n      <Radio\n        value="3"\n        disabled\n      />\n    </RadioGroup>\n  );\n}\n',options:{demo:"/demos/radio/fill.jsx",showCode:"true"}},"\n\n## With label\n\n",{type:"demo",data:'import React from \'react\';\nimport { RadioGroup, Radio } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <RadioGroup name="numbers" defaultValue="1">\n      <Radio\n        value="1"\n        style={{\n          marginBottom: 10,\n        }}\n        label="I am label left"\n      />\n      <br />\n      <Radio\n        value="2"\n        label="I am label right"\n        labelPosition="right"\n      />\n    </RadioGroup>\n  );\n}\n',options:{demo:"/demos/radio/label.jsx",showCode:"true"}},"\n\n## Controlled\n\n",{type:"demo",data:'import React, { Component } from \'react\';\nimport { RadioGroup, Radio } from \'lib-react-components\';\n\nexport default class Usage extends Component {\n  state = {\n    value: \'1\',\n  };\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <RadioGroup\n        name="numbers"\n        value={value}\n        onChange={(e, val) => this.setState({ value: val })}\n      >\n        <Radio\n          value="1"\n          style={{\n            marginRight: 10,\n          }}\n        />\n        <Radio\n          value="2"\n          style={{\n            marginRight: 10,\n          }}\n        />\n        <Radio\n          value="3"\n        />\n      </RadioGroup>\n    );\n  }\n}\n',options:{demo:"/demos/radio/controlled.jsx",showCode:"true"}},"\n\n## Customized\n\n",{type:"demo",data:'import React from \'react\';\nimport { RadioGroup, Radio } from \'lib-react-components\';\n\nexport default function Usage() {\n  return (\n    <RadioGroup name="numbers" defaultValue="1">\n      <Radio\n        value="1"\n        color="black"\n        style={{\n          marginRight: 10,\n        }}\n      />\n      <Radio\n        value="2"\n        colorOn="wrong"\n        style={{\n          marginRight: 10,\n        }}\n      />\n      <Radio\n        value="3"\n        iconColorOn="black"\n        bgType="fill"\n      />\n    </RadioGroup>\n  );\n}\n',options:{demo:"/demos/radio/customized.jsx",showCode:"true"}},"\n\n## Props\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| bgType | enum: 'fill' &#124;<br> 'stroke'<br> | 'fill' | Component type one of `fill` or `stroke`. If `fill` - component will be have background-color from `color` props. If `stroke` - component will be have border-color from `color` props. |\n| checked | bool | false | If true, the component is checked |\n| className | string | '' | The CSS class name of the root element |\n| color | string | 'light_grey' | Component color from theme |\n| colorOn | string | 'primary' | Component checked color from theme |\n| disabled | bool | false | If true, the component will be disabled |\n| iconColor | string | 'grey' | Component icon color from theme |\n| iconColorOn | string | 'white' | Component checked icon color from theme |\n| inputProps | union: object<br> | {} | Properties for `<input type=\"radio\" />` element |\n| label | union: string &#124;<br> number<br> | undefined | Label for radio |\n| labelPosition | enum: 'left' &#124;<br> 'right'<br> | 'left' | Where the label will be placed next to the radio |\n| labelProps | object | {} | `Typography` props for label |\n| name | string | undefined | Name attribute for component |\n| onChange | func | function() {} | Callback fired when the state is changed |\n| tabIndex | number | 0 | The tabIndex of the root element |\n| value | string | undefined | The value of the component |\n","\n\n## Props RadioGroup\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| children\xa0* | node | \xa0 | The content of the component |\n| defaultValue | string | '' | The `value` property of the radio button that will be selected by default. This takes precedence over the `checked` property of the `Radio` elements |\n| name\xa0* | string | \xa0 | The name used to reference the value of the control |\n| onChange | func | function() {} | Change callback |\n| value | string | '' | Value of the selected radio button |\n"]}}]);
//# sourceMappingURL=sources-demos-radio-index-md.614cb143.chunk.js.map