const forms = require('forms');
const fields = forms.fields;
const validators = forms.validators;

let reg_form = forms.create({
  name: fields.string({required: true}),
  address: fields.string({required: true}),
  phone: fields.number({required: true}),
  credentialType: fields.string({
    widget: forms.widgets.select(),
    choices: (()=>{return ['Tipo 1', 'Tipo 2']})()
  }),
  credentialNumber: fields.number({required: true}),
  requestNumber: fields.number({required: true}),
  inscriptionDate: fields.date({ required: true, value: Date.now().toString() }),
  birthDate: fields.date({required: true, value: Date.now()}),
  birthPlace: fields.string({required: true}),
  ocupation: fields.string({required: true}),
  observations: fields.string()
});



module.exports = {
  form: reg_form.toHTML(),
  reg_form: reg_form
};
