-- Insert data into departments table
INSERT INTO departments (id, name, address) VALUES
(1, 'Computer Science', 'Fake Street 1\nCity, State, ZIP'),
(2, 'Mathematics', 'Fake Street 2\nCity, State, ZIP'),
(3, 'Physics', 'Fake Street 3\nCity, State, ZIP');

-- Insert data into courses table
INSERT INTO courses (id, name, department_id, course_number) VALUES
(1, 'Introduction to Computer Science', 1, 'CS101'),
(2, 'Data Structures and Algorithms', 1, 'CS201'),
(3, 'Operating Systems', 1, 'CS301'),
(4, 'Linear Algebra', 2, 'MATH101'),
(5, 'Calculus I', 2, 'MATH201'),
(6, 'Probability and Statistics', 2, 'MATH301'),
(7, 'Classical Mechanics', 3, 'PHYS101'),
(8, 'Electromagnetism', 3, 'PHYS201'),
(9, 'Quantum Physics', 3, 'PHYS301'),
(10, 'Database Systems', 1, 'CS401');

-- Insert data into students table
INSERT INTO students (id, first_name, last_name, student_id, address, department_id) VALUES
(1, 'John', 'Doe', 'S00001', '1234 Rue Sainte-Catherine
Montreal, QC, H3B 1K5', 2),
(2, 'Jane', 'Smith', 'S00002', '5678 Boulevard Saint-Laurent
Montreal, QC, H2S 3C6', 3),
(3, 'Alice', 'Johnson', 'S00003', '9101 Rue Sherbrooke Ouest
Montreal, QC, H4A 1H3', 1),
(4, 'Bob', 'Williams', 'S00004', '2345 Avenue du Parc
Montreal, QC, H2X 3P1', 2),
(5, 'Charlie', 'Brown', 'S00005', '6789 Rue Saint-Denis
Montreal, QC, H2J 2L7', 3),
(6, 'David', 'Davis', 'S00006', '3456 Boulevard René-Lévesque
Montreal, QC, H3B 4W8', 1),
(7, 'Eve', 'Martinez', 'S00007', '7890 Rue Wellington
Montreal, QC, H4G 1V3', 2),
(8, 'Frank', 'Garcia', 'S00008', '4567 Rue Peel
Montreal, QC, H3A 1T1', 3),
(9, 'Grace', 'Rodriguez', 'S00009', '8765 Rue Ontario Est
Montreal, QC, H1V 1R4', 1),
(10, 'Hank', 'Lee', 'S00010', '5432 Chemin de la Côte-des-Neiges
Montreal, QC, H3H 1T7', 2),
(11, 'Ivy', 'Lopez', 'S00011', '234 Rue Saint-Hubert
Montreal, QC, H2J 2X4', 3),
(12, 'Jack', 'Hernandez', 'S00012', '890 Rue Saint-Paul Ouest
Montreal, QC, H3C 1M8', 1),
(13, 'Kelly', 'Young', 'S00013', '678 Rue Papineau
Montreal, QC, H2K 4J5', 2),
(14, 'Leo', 'King', 'S00014', '456 Avenue des Pins
Montreal, QC, H2W 1R3', 3),
(15, 'Mia', 'Scott', 'S00015', '1357 Rue Beaubien Est
Montreal, QC, H2G 1J4', 1),
(16, 'Noah', 'Green', 'S00016', '789 Rue Rachel Ouest
Montreal, QC, H2J 2Y2', 2),
(17, 'Olivia', 'Adams', 'S00017', '1010 Rue Sainte-Famille
Montreal, QC, H2X 2L4', 3),
(18, 'Paul', 'Baker', 'S00018', '567 Rue Saint-Urbain
Montreal, QC, H2X 3K8', 1),
(19, 'Quinn', 'Gonzalez', 'S00019', '4321 Avenue Atwater
Montreal, QC, H3H 1Y3', 2),
(20, 'Ryan', 'Nelson', 'S00020', '765 Rue Jean-Talon Ouest
Montreal, QC, H3N 1P1', 3),
(21, 'Sophia', 'Carter', 'S00021', '9800 Rue Jarry Est
Montreal, QC, H1H 3N7', 1),
(22, 'Tyler', 'Mitchell', 'S00022', '3210 Boulevard de Maisonneuve
Montreal, QC, H3H 2X3', 2),
(23, 'Uma', 'Perez', 'S00023', '123 Avenue du Mont-Royal
Montreal, QC, H2T 1N4', 3),
(24, 'Victor', 'Roberts', 'S00024', '8750 Rue Hochelaga
Montreal, QC, H1L 2L4', 1),
(25, 'Wendy', 'Turner', 'S00025', '432 Rue Saint-Viateur Ouest
Montreal, QC, H2T 2L7', 2),
(26, 'Xander', 'Phillips', 'S00026', '678 Boulevard Pie-IX
Montreal, QC, H1V 2Y8', 3),
(27, 'Yara', 'Campbell', 'S00027', '9801 Rue Wellington
Montreal, QC, H4G 3M5', 1),
(28, 'Zane', 'Evans', 'S00028', '7654 Rue Lajeunesse
Montreal, QC, H2R 2J5', 2),
(29, 'Abby', 'Edwards', 'S00029', '4532 Avenue Papineau
Montreal, QC, H2H 1N3', 3),
(30, 'Ben', 'Collins', 'S00030', '908 Rue Clark
Montreal, QC, H2Z 1K1', 1),
(31, 'Cameron', 'Stewart', 'S00031', '1234 Rue Sainte-Catherine
Montreal, QC, H3B 1K5', 2),
(32, 'Diana', 'Sanchez', 'S00032', '5678 Boulevard Saint-Laurent
Montreal, QC, H2S 3C6', 3),
(33, 'Ethan', 'Morris', 'S00033', '9101 Rue Sherbrooke Ouest
Montreal, QC, H4A 1H3', 1),
(34, 'Fiona', 'Rogers', 'S00034', '2345 Avenue du Parc
Montreal, QC, H2X 3P1', 2),
(35, 'George', 'Reed', 'S00035', '6789 Rue Saint-Denis
Montreal, QC, H2J 2L7', 3),
(36, 'Holly', 'Cook', 'S00036', '3456 Boulevard René-Lévesque
Montreal, QC, H3B 4W8', 1),
(37, 'Isaac', 'Morgan', 'S00037', '7890 Rue Wellington
Montreal, QC, H4G 1V3', 2),
(38, 'Julia', 'Bell', 'S00038', '4567 Rue Peel
Montreal, QC, H3A 1T1', 3),
(39, 'Kevin', 'Murphy', 'S00039', '8765 Rue Ontario Est
Montreal, QC, H1V 1R4', 1),
(40, 'Lily', 'Bailey', 'S00040', '5432 Chemin de la Côte-des-Neiges
Montreal, QC, H3H 1T7', 2);


-- Insert data into student_courses table
INSERT INTO student_courses (student_id, course_id) VALUES
(19, 5),
(3, 8),
(21, 7),
(32, 4),
(6, 7),
(6, 9),
(11, 3),
(11, 8),
(11, 9),
(11, 10),
(12, 10),
(12, 2),
(13, 4),
(13, 2),
(14, 10),
(14, 3),
(15, 7),
(15, 2),
(15, 5),
(15, 9),
(16, 4),
(16, 8),
(17, 3),
(17, 5),
(18, 8),
(18, 7),
(18, 3),
(19, 4),
(19, 10),
(19, 8),
(20, 4),
(20, 3),
(20, 9),
(20, 1),
(21, 4),
(21, 10),
(22, 5),
(22, 3),
(23, 8),
(23, 3),
(24, 6),
(24, 5),
(25, 1),
(25, 10),
(25, 9),
(26, 7),
(26, 5),
(26, 4),
(26, 2),
(27, 6),
(27, 1),
(27, 2),
(28, 3),
(28, 6),
(28, 5),
(29, 10),
(29, 8),
(29, 2),
(30, 8),
(30, 5),
(31, 6),
(31, 9),
(32, 9),
(32, 3),
(33, 2),
(33, 1),
(33, 4),
(34, 7),
(34, 10),
(34, 5),
(34, 9),
(35, 8),
(35, 5),
(35, 6),
(35, 1),
(36, 10),
(36, 1),
(37, 3),
(37, 9),
(37, 6),
(37, 1),
(38, 9),
(38, 6),
(38, 4),
(39, 8),
(39, 9),
(39, 2),
(39, 10),
(40, 9),
(40, 10),
(40, 6);
