var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Content Model
 * ==========
 */

var PageContent = new keystone.List('PageContent', {
	map: { name: 'sectionTitle' }
});

PageContent.add({
  page: {type: String, initial: true, required: true },
  sectionTitle: { type: String, required: true },
  order: { type: Number },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
  image: { type: Types.CloudinaryImage },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: { type: Types.Markdown, height: 200 }
});


PageContent.defaultColumns = 'title, sectionTitle|20%, author|20%, publishedDate|20%';
PageContent.register();
