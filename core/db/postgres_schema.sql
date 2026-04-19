CREATE TABLE legal_documents (
    id TEXT PRIMARY KEY,
    source TEXT,
    jurisdiction TEXT,
    content_hash TEXT,
    raw_text TEXT,
    retrieved_at TIMESTAMP
);

CREATE TABLE legal_nodes (
    id TEXT PRIMARY KEY,
    type TEXT,
    weight INTEGER,
    content JSONB
);

CREATE TABLE legal_edges (
    id SERIAL PRIMARY KEY,
    from_node TEXT,
    to_node TEXT,
    relation_type TEXT
);
