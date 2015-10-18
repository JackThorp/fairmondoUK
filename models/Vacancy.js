var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Vacancy Model
 * ==========
 */

var Vacancy = new keystone.List('Vacancy', {});

Vacancy.add({
  title: { type: String, initial: true },
	description: { type: Types.Markdown, height: 400 }
});


Vacancy.defaultColumns = 'title';
Vacancy.register();
