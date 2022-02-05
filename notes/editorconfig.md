# EditorConfig

This file explain how to configure the editorconfig file

> ### Docs: https://editorconfig.org
> ### Tutorial: https://www.youtube.com/watch?v=bU3qLfszKZ4
> ### EditorConfig: padronização automática de estilo de código: https://desenvolvimentoparaweb.com/indicacoes/editorconfig-padronizacao-estilo-codigo/

</br>

## Important properties 

| Properties  | Description | Values | Examples
| ------------- | ------------- | ------------- | ------------- 
| `[]`  | File format details (brackets). Inside brackets is possible define which type of file is affected by the configuration  | ------------- | <ul><li>`[*]` - all files</li><li>`[*js]` - all `.js` files</li><li>`[lib/**/*.js]` - all `.js` inside **lib** folder</li><li>`[package.json]` - only the `package.json` file</li><li>`[!package.json]` - besides the `package.json` file</li></ul> 
| `indent_style` | Define type of indent. Tabs vs Spaces | `space` or `tab` | -------------
| `indent_size` | Size of indent | `number` | ------------- 
| `end_of_line` | Type of character to represents the break line | `lf`, `cr`, or `crlf` | ------------- 
| `charset` | Define type of charset | `latin1`, `utf-8`, `utf-8-bom`, `utf-16be` or `utf-16le` | ------------- 
| `trim_trailing_whitespace` | Remove any space of character before new line | `boolean` | ------------- 
| `insert_final_newline` | Insert a new line in the end of file or not | `boolean` | ------------- 