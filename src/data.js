const simple = {
  model: {
    name: 'simple example',
    chapters: [
      {
        title: 'First chapter',
        inputs: [
          {
            label: 'First txtField',
            name: 'first_txt_field',
            type: 'textField'
          },
          {
            label: 'Masked txtField',
            name: 'first_txt_field_masked',
            type: 'textFieldMasked',
            mask: '00/00/0000'
          }
        ]
      }
    ]
  },
  rules: {
    title: "simple",
    description: "A simple form",
    type: "object",
    properties: {
      first_txt_field: {
        type: 'string',
        required: true,
      },
      first_txt_field_masked: {
        type: "string",
        format: 'date-time',
        required: true
      }
    }
  },
  state: {
  }
}

export { simple }