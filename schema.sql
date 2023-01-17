DROP TABLE IF EXISTS product, related, styles, skus, characteristics, photos, features CASCADE;

CREATE TABLE product (
  id integer primary key,
  name text,
  slogan text,
  description text,
  category text,
  default_price integer
);

COPY product
FROM '/Users/aristotle/HR/SEN/products-server/csv/product.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE related (
  id integer primary key,
  current_product_id integer,
  related_product_id integer,
  FOREIGN KEY (current_product_id)
  REFERENCES product(id)
);

COPY related
FROM '/Users/aristotle/HR/SEN/products-server/csv/related.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE styles (
  id integer primary key,
  productId integer,
  name text,
  sale_price text,
  original_price text,
  default_style integer,
  FOREIGN KEY (productId)
  REFERENCES product(id)
);

COPY styles
FROM '/Users/aristotle/HR/SEN/products-server/csv/styles.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE skus (
  id integer primary key,
  styleId integer,
  size text,
  quantity integer,
  FOREIGN KEY (styleId)
  REFERENCES styles(id)
);

COPY skus
FROM '/Users/aristotle/HR/SEN/products-server/csv/skus.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE characteristics (
  id integer primary key,
  product_id integer,
  name text,
  FOREIGN KEY (product_id)
  REFERENCES product(id)
);

COPY characteristics
FROM '/Users/aristotle/HR/SEN/products-server/csv/characteristics.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE photos (
  id integer primary key,
  styleId integer,
  url text,
  thumbnail_url text,
  FOREIGN KEY (styleId)
  REFERENCES styles(id)
);

COPY photos
FROM '/Users/aristotle/HR/SEN/products-server/csv/photos.csv'
DELIMITER ','
CSV HEADER;


CREATE TABLE features  (
  id integer primary key,
  product_id integer,
  feature text,
  value text,
  FOREIGN KEY (product_id)
  REFERENCES product(id)
);

COPY features
FROM '/Users/aristotle/HR/SEN/products-server/csv/features.csv'
DELIMITER ','
CSV HEADER;