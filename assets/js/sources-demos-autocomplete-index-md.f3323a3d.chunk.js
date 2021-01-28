(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{86:function(e,n){e.exports=["# Autocomplete\n\n## Simple Autocomplete\n\n",{type:"demo",data:'import React from \'react\';\nimport { Autocomplete } from \'lib-react-components\';\nimport planets from \'./planets.json\';\n\nexport default function Usage() {\n  return (\n    <React.Fragment>\n      <Autocomplete\n        placeholder="Planet name"\n        options={planets}\n      />\n      <br/>\n      <Autocomplete\n        placeholder="Default value"\n        options={planets}\n        defaultValue={planets[1]}\n      />\n      <br/>\n      <Autocomplete\n        placeholder="Required"\n        options={planets}\n        required\n      />\n      <br/>\n      <Autocomplete\n        placeholder="Disabled"\n        options={planets}\n        disabled\n      />\n    </React.Fragment>\n  );\n}\n',options:{demo:"/demos/autocomplete/simple.jsx",showCode:"true"}},"\n\n## Controlled Autocomplete\n\n",{type:"demo",data:"import React from 'react';\nimport { Autocomplete } from 'lib-react-components';\nimport planets from './planets.json';\n\nexport default class Usage extends React.Component {\n  state = {\n    value: '',\n  };\n\n  handleChange = (event) => {\n    this.setState({\n      value: event.target.value,\n    });\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <Autocomplete\n        placeholder=\"Planet name\"\n        options={planets}\n        value={value}\n        onChange={this.handleChange}\n      />\n    );\n  }\n}\n\n",options:{demo:"/demos/autocomplete/controlled.jsx",showCode:"true"}},"\n\n## Customized Autocomplete\n\n",{type:"demo",data:'import React from \'react\';\nimport { Autocomplete } from \'lib-react-components\';\nimport planets from \'./planets.json\';\n\nexport default function Usage() {\n  return (\n    <React.Fragment>\n      <Autocomplete\n        placeholder="Size"\n        options={planets}\n        size="large"\n      />\n      <br/>\n      <Autocomplete\n        placeholder="Colors"\n        options={planets}\n        bgType="fill"\n        color="success"\n        textColor="white"\n        colorFocus="secondary"\n      />\n      <br/>\n      <Autocomplete\n        placeholder="Option"\n        options={planets}\n        renderOption={(option) => (\n          <span>\n            \ud83c\udf0d {option}\n          </span>\n        )}\n      />\n      <br/>\n      <Autocomplete\n        placeholder="Disable filtering"\n        options={planets}\n        disableFiltering\n      />\n    </React.Fragment>\n  );\n}\n',options:{demo:"/demos/autocomplete/customized.jsx",showCode:"true"}},"\n\n## Props\n\n","\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| autoFocus | bool | false | If true, the input will be focused during the first mount. |\n| bgType | enum: 'fill' &#124;<br> 'stroke'<br> | 'stroke' | Component type one of `fill` or `stroke`. If `fill` - component will be have background-color from `color` props. If `stroke` - component will be have border-color from `color` props. |\n| className | string | \xa0 | The CSS class name of the wrapper element. |\n| color | string | 'light_grey' | Component color from theme. |\n| colorFocus | string | 'primary' | Component focus color from theme. |\n| defaultValue | union: string &#124;<br> number<br> | '' | The default input value, useful when not controlling the component. |\n| disableFiltering | bool | false | If `true`, the options can't be filtered. |\n| disabled | bool | false | If true, the input will be disabled. |\n| flip | bool | true | If `true`, component will automatically calc possible dropdown opened direction. |\n| getOptionDisabled | func | \xa0 | Used to determine the disabled state for a given option. |\n| getOptionLabel | func | option => option.label &#124;&#124; option | Used to determine the string value for a given option. It's used to fill the input (and the list box options if `renderOption` is not provided). |\n| inputProps | object | {} | Properties applied to the input element. |\n| mobileSize | enum: 'medium' &#124;<br> 'large'<br> | \xa0 | Component size for mobile. |\n| name | string | \xa0 | Name attribute of the input element. |\n| onBlur | func | \xa0 | Callback fired when the input left focus. |\n| onChange | func | \xa0 | Callback fired when the value is changed. |\n| onFocus | func | \xa0 | Callback fired when the input receives focus. |\n| onInputChange | func | \xa0 | Callback fired when the input value changes. |\n| onKeyDown | func | \xa0 |  |\n| options\xa0* | array | \xa0 | Array of options. |\n| placeholder | string | \xa0 | The short hint displayed in the input before the user enters a value. |\n| placeholderColor | string | 'grey_4' | Color for the placeholder. |\n| placement | enum: 'top' &#124;<br> 'bottom'<br> | 'bottom' | Component dropdown start opened direction. |\n| renderOption | func | \xa0 | Render the option, use `getOptionLabel` by default. |\n| required | bool | false | If true, the input will be required. |\n| size | enum: 'medium' &#124;<br> 'large'<br> | 'medium' | Component size. |\n| tabIndex | number | 0 | Element tabIndex. |\n| textColor | string | 'black' | Component text color from theme. |\n| type | enum: 'text' &#124;<br> 'email' &#124;<br> 'tel'<br> | 'text' | Type of the input element. |\n| valid | bool | \xa0 | If false, the input will be unvalid styles. |\n| validation | validationPropType | \xa0 | Array with validation types. |\n| value | union: string &#124;<br> number<br> | \xa0 | The input value. |\n"]}}]);
//# sourceMappingURL=sources-demos-autocomplete-index-md.f3323a3d.chunk.js.map