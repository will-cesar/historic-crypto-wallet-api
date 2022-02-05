## EditorConfig

> ### This file explain how to configure the editorconfig file

> ### Docs: https://editorconfig.org
> ### Tutorial: https://www.youtube.com/watch?v=bU3qLfszKZ4
> ### EditorConfig: padronização automática de estilo de código: https://desenvolvimentoparaweb.com/indicacoes/editorconfig-padronizacao-estilo-codigo/

- `[]` - File format details (brackets)
  - inside brackets is possible define which type of file is affected by the configuration
  - Exemple:
    - [*] - all files
    - [*js] - all `.js` files
    - [lib/**/*.js] - all `.js` inside **lib** folder
    - [package.json] - only the `package.json` file
    - [!package.json] - besides the `package.json` file

- `indent_style` - define type of indent. Tabs vs Spaces
  - Values: `space` or `tab`

- `indent_size` - size of indent
  - Values: type `number`

- `end_of_line` - type of character to represents the break line
  - Values: `lf`, `cr`, ou `crlf`

- `charset` - define type of indent
  - Values: `latin1`, `utf-8`, `utf-8-bom`, `utf-16be` ou `utf-16le`

- `trim_trailing_whitespace` - remove any space of character before new line
  - Values: type `boolean`

- `insert_final_newline` - insert a new line in the end of file or not
  - Values: type `boolean`
