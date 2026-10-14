CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(150) NOT NULL UNIQUE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE items (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(150) NOT NULL,
    price       NUMERIC(12, 2) NOT NULL CHECK (price > 0),
    available   BOOLEAN NOT NULL DEFAULT TRUE,
    wear        VARCHAR(2) NOT NULL
);

CREATE TABLE orders (
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER NOT NULL REFERENCES users(id),
    status      VARCHAR(20) NOT NULL DEFAULT 'paid',
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE order_items (
    id          SERIAL PRIMARY KEY,
    order_id    INTEGER NOT NULL REFERENCES orders(id),
    item_id     INTEGER NOT NULL REFERENCES items(id),
    unit_price  NUMERIC(12, 2) NOT NULL
);