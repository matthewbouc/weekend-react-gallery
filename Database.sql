-- database name:  react_gallery
--DROP TABLE galleryItems;

CREATE TABLE galleryItems (
	id SERIAL PRIMARY KEY,
	path VARCHAR(100) NOT NULL,
	description VARCHAR(255) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO galleryItems (path, description)
	VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
	('images/Cheetah.png', 'Photo of me a few weeks ago working on Koala Holla'), 
	('images/Ostrich.png', 'Photo of an Ostrich about to nap a food bag'), 
	('images/NotAntelope.png', 'Photo of a NotAntelope'),
	('https://animals.sandiegozoo.org/sites/default/files/inline-images/emu_face.jpg', 'I can''t even..');
