-- database name:  react_gallery
--DROP TABLE galleryItems;

CREATE TABLE galleryItems (
	id SERIAL PRIMARY KEY,
	path VARCHAR(100) NOT NULL,
	description VARCHAR(255) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO galleryItems (path, description)
	VALUES ('images/SharkAttack.jpeg', 'Many years ago, a giant shark swallowed me whole. Eventually the shark was captured.  I was freed after countless selfies were taken.'),
('images/cowboyMatt.jpeg', 'I roamed the wild west with my trusty steed. He took me places I never could have imagined. Those were the good days.'),
('images/FBIdays.jpeg', 'At a young age, the FBI recruited me.  The work was fairly tedious and boring. Upon meeting Janet Snakehole, I left the FBI to help her steal the President''s rubies.'),
('images/uncling.jpeg', 'My niece is teaching me a new game.  I''m losing horribly.  The rules never seem to be in my favor.'),
('images/kira.jpeg', 'Kira Poppyseed. Everyone thinks their pet is the cutest. Kira actually was.'),
('images/ostrichBeforeEatingMyEntireBagOfFood.jpeg', 'In Texas, Ostriches roam free. They''re majestic and beautiful birds.'),
('images/ostrichEatingTheBag.png', 'MOTHER @#$!.. These Ostriches will literally bagnap food right from your hand. They''re horrible and disgusting creatures.'),
('images/snacktime.jpeg', 'Texas is also home to donkeys. Donkeys will not bite your hand off and bagnap your food.'),
('images/apostleIsles.jpeg', 'The Apostle Islands.  You can kayak out to them on a beautiful and calm day.  Or you can just take a guided tour on a motorboat and drink, like we did.'),
('images/caliHike.jpeg', 'Hiking in California.  For some reason, half the trail was under massive reconstruction with bulldozers.  Aren''t trails just formed by walking the same path over and over??'),
('images/ireland.jpeg', 'Probably the most common picture taken at the Cliffs of Moher.. or Ireland.  Did I take this, or is it from Google - not even I can say.'),
('images/willowriver.jpeg', 'Willow River State Park.  Hudson''s finest. Great go-to trail for the area. Also, never seen a bulldozer smashing trees and digging huge plots of land up.');
