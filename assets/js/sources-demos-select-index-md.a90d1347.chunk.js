(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{116:function(n,e){n.exports=["# Select\n\nSelect components are used for collecting user provided information from a list of options.\n\n## Stroke\n\n",{type:"demo",data:"import React from 'react';\nimport { Select, SelectItem } from 'lib-react-components';\n\nconst options = [\n  {\n    label: 'Mercury',\n    value: 'mercury',\n  },\n  {\n    label: 'Venus',\n    value: 'venus',\n  },\n  {\n    label: 'Earth',\n    value: 'earth',\n  },\n  {\n    label: 'Mars',\n    value: 'mars',\n  },\n  {\n    label: 'Jupiter',\n    value: 'jupiter',\n  },\n  {\n    label: 'Saturn',\n    value: 'saturn',\n  },\n  {\n    label: 'Uranus',\n    value: 'uranus',\n  },\n  {\n    label: 'Neptune',\n    value: 'neptune',\n  },\n];\n\nexport default function Usage() {\n  return (\n    <div>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n        bgType=\"stroke\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n        defaultValue=\"earth\"\n        bgType=\"stroke\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n        }}\n        disabled\n        bgType=\"stroke\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n    </div>\n  );\n}\n\n",options:{demo:"/demos/select/stroke.jsx",showCode:"true"}},"\n\n## Fill\n\n",{type:"demo",data:"import React from 'react';\nimport { Select, SelectItem } from 'lib-react-components';\n\nconst options = [\n  {\n    label: 'Mercury',\n    value: 'mercury',\n  },\n  {\n    label: 'Venus',\n    value: 'venus',\n  },\n  {\n    label: 'Earth',\n    value: 'earth',\n  },\n  {\n    label: 'Mars',\n    value: 'mars',\n  },\n  {\n    label: 'Jupiter',\n    value: 'jupiter',\n  },\n  {\n    label: 'Saturn',\n    value: 'saturn',\n  },\n  {\n    label: 'Uranus',\n    value: 'uranus',\n  },\n  {\n    label: 'Neptune',\n    value: 'neptune',\n  },\n];\n\nexport default function Usage() {\n  return (\n    <div>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n        defaultValue=\"earth\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n        }}\n        disabled\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n    </div>\n  );\n}\n",options:{demo:"/demos/select/fill.jsx",showCode:"true"}},"\n\n## Native\n\n",{type:"demo",data:"import React from 'react';\nimport { Select } from 'lib-react-components';\n\nconst options = [\n  {\n    label: 'Mercury',\n    value: 'mercury',\n  },\n  {\n    label: 'Venus',\n    value: 'venus',\n  },\n  {\n    label: 'Earth',\n    value: 'earth',\n  },\n  {\n    label: 'Mars',\n    value: 'mars',\n  },\n  {\n    label: 'Jupiter',\n    value: 'jupiter',\n  },\n  {\n    label: 'Saturn',\n    value: 'saturn',\n  },\n  {\n    label: 'Uranus',\n    value: 'uranus',\n  },\n  {\n    label: 'Neptune',\n    value: 'neptune',\n  },\n];\n\nexport default function Usage() {\n  return (\n    <div>\n      <Select\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n        native\n      >\n        {options.map(opt => (\n          <option\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </option>\n        ))}\n      </Select>\n      <Select\n        style={{\n          maxWidth: 300,\n        }}\n        defaultValue=\"earth\"\n        native\n      >\n        {options.map(opt => (\n          <option\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </option>\n        ))}\n      </Select>\n    </div>\n  );\n}\n\n",options:{demo:"/demos/select/native.jsx",showCode:"true"}},"\n\n## Controlled\n\n",{type:"demo",data:"import React, { Component } from 'react';\nimport { Select, SelectItem } from 'lib-react-components';\n\nconst options = [\n  {\n    label: 'Mercury',\n    value: 'mercury',\n  },\n  {\n    label: 'Venus',\n    value: 'venus',\n  },\n  {\n    label: 'Earth',\n    value: 'earth',\n  },\n  {\n    label: 'Mars',\n    value: 'mars',\n  },\n  {\n    label: 'Jupiter',\n    value: 'jupiter',\n  },\n  {\n    label: 'Saturn',\n    value: 'saturn',\n  },\n  {\n    label: 'Uranus',\n    value: 'uranus',\n  },\n  {\n    label: 'Neptune',\n    value: 'neptune',\n  },\n];\n\nexport default class Usage extends Component {\n  state = {\n    value: 'earth',\n  };\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n        }}\n        value={value}\n        onChange={(e, val) => this.setState({ value: val })}\n        placement=\"top\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n    );\n  }\n}\n",options:{demo:"/demos/select/controlled.jsx",showCode:"true"}},"\n\n## Sizes\n\n",{type:"demo",data:"import React from 'react';\nimport { Select, SelectItem } from 'lib-react-components';\n\nconst options = [\n  {\n    label: 'Mercury',\n    value: 'mercury',\n  },\n  {\n    label: 'Venus',\n    value: 'venus',\n  },\n  {\n    label: 'Earth',\n    value: 'earth',\n  },\n  {\n    label: 'Mars',\n    value: 'mars',\n  },\n  {\n    label: 'Jupiter',\n    value: 'jupiter',\n  },\n  {\n    label: 'Saturn',\n    value: 'saturn',\n  },\n  {\n    label: 'Uranus',\n    value: 'uranus',\n  },\n  {\n    label: 'Neptune',\n    value: 'neptune',\n  },\n];\n\nexport default function Usage() {\n  return (\n    <div>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n        size=\"large\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n        }}\n        bgType=\"stroke\"\n        size=\"large\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n    </div>\n  );\n}\n\n",options:{demo:"/demos/select/sizes.jsx",showCode:"true"}},"\n\n## Customized\n\n",{type:"demo",data:"import React from 'react';\nimport { Select, SelectItem } from 'lib-react-components';\n\nconst options = [\n  {\n    label: 'Mercury',\n    value: 'mercury',\n  },\n  {\n    label: 'Venus',\n    value: 'venus',\n  },\n  {\n    label: 'Earth',\n    value: 'earth',\n  },\n  {\n    label: 'Mars',\n    value: 'mars',\n  },\n  {\n    label: 'Jupiter',\n    value: 'jupiter',\n  },\n  {\n    label: 'Saturn',\n    value: 'saturn',\n  },\n  {\n    label: 'Uranus',\n    value: 'uranus',\n  },\n  {\n    label: 'Neptune',\n    value: 'neptune',\n  },\n];\n\nexport default function Usage() {\n  return (\n    <div>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n          marginBottom: 10,\n        }}\n        bgType=\"stroke\"\n        color=\"black\"\n        textColor=\"black\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n      <Select\n        placeholder=\"Planet name\"\n        style={{\n          maxWidth: 300,\n        }}\n        colorFocus=\"success\"\n        color=\"black\"\n        textColor=\"white\"\n      >\n        {options.map(opt => (\n          <SelectItem\n            key={opt.value}\n            value={opt.value}\n          >\n            {opt.label}\n          </SelectItem>\n        ))}\n      </Select>\n    </div>\n  );\n}\n",options:{demo:"/demos/select/customized.jsx",showCode:"true"}},"\n\n## Props\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| children\xa0* | node | \xa0 | The option elements to populate the select with. |\n| native | bool | false | If true, the component will be using a native select element. |\n| name | string | undefined | The input/select name value. |\n| disabled | bool | false | If true, the select will be disabled. |\n| value | union: string &#124;<br> number<br> | undefined | The input/select value. |\n| defaultValue | union: string &#124;<br> number<br> | undefined | The input/select default value. |\n| onChange | func | function() {} | Callback function fired when a menu item is selected. |\n| onFocus | func | function() {} |  |\n| onBlur | func | function() {} |  |\n| onKeyDown | func | function() {} |  |\n| tabIndex | number | 0 | Element tabIndex. |\n| className | string | '' | Classname for the root element. |\n| placeholder | union: string &#124;<br> number<br> | undefined | The short hint displayed in the input before the user enters a value (only for `native: false`) |\n| placeholderColor | string | 'grey_4' | Color for placeholder |\n| inputProps | union: object<br> | {} | Properties applied to the input/select element. |\n| arrowComponent | node | null |  |\n| bgType | enum: 'fill' &#124;<br> 'stroke'<br> | 'fill' | Component type one of `fill` or `stroke`. If `fill` - component will be have background-color from `color` props. If `stroke` - component will be have border-color from `color` props. |\n| color | string | 'light_grey' | Component color from theme. |\n| textColor | string | 'black' | Component text color from theme. |\n| colorFocus | string | 'primary' | Component focus color from theme. |\n| size | enum: 'medium' &#124;<br> 'large'<br> | 'medium' | Component size. |\n| mobileSize | enum: 'medium' &#124;<br> 'large'<br> | undefined | Component size for mobile. |\n| placement | enum: 'top' &#124;<br> 'bottom'<br> | 'bottom' | Component dropdown start opened direction. |\n| flip | bool | true | If `true`, component will automatically calc possible dropdown opened direction. |\n","\n\n## Props SelectItem\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| children\xa0* | union: number &#124;<br> string &#124;<br> node<br> | \xa0 |  |\n| value\xa0* | union: number &#124;<br> string<br> | \xa0 |  |\n| selected | bool | false |  |\n| disabled | bool | false |  |\n| hasFocus | bool | false |  |\n| className | string | '' |  |\n| textColor | string | 'black' | Component text color from theme |\n| colorFocus | string | 'primary' | Component focus color from theme |\n| size | enum: 'medium' &#124;<br> 'large'<br> | 'medium' | Component size |\n"]}}]);
//# sourceMappingURL=sources-demos-select-index-md.a90d1347.chunk.js.map