CREATE TABLE barchartjs (
  id SERIAL PRIMARY KEY,
  jan INT NOT NULL DEFAULT 0,
  feb INT NOT NULL DEFAULT 0,
  mar INT NOT NULL DEFAULT 0,
  apr INT NOT NULL DEFAULT 0,
  may INT NOT NULL DEFAULT 0,
  jun INT NOT NULL DEFAULT 0,
  jul INT NOT NULL DEFAULT 0,
  aug INT NOT NULL DEFAULT 0,
  sep INT NOT NULL DEFAULT 0,
  oct INT NOT NULL DEFAULT 0,
  nov INT NOT NULL DEFAULT 0,
  "dec" INT NOT NULL DEFAULT 0,
  barcolor VARCHAR(20),
  labelvalue VARCHAR(50)
);

-- sample data
INSERT INTO barchartjs (jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, "dec", barcolor, labelvalue) VALUES
  (12, 19, 3, 5, 2, 3, 8, 14, 6, 9, 11, 15, 'red', 'Product A'),
  (7, 11, 5, 8, 12, 6, 4, 10, 13, 5, 9, 7, 'blue', 'Product B'),
  (3, 6, 9, 4, 7, 10, 12, 5, 8, 11, 6, 4, 'green', 'Product C');
