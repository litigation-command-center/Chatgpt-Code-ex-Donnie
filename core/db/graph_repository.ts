export interface DB {
  query: (sql: string, params?: any[]) => Promise<any>;
}

export class GraphRepository {
  constructor(private db: DB) {}

  async saveNode(node: any) {
    return this.db.query(
      "INSERT INTO legal_nodes (id, type, weight, content) VALUES ($1,$2,$3,$4)",
      [node.id, node.type, node.weight, JSON.stringify(node.content)]
    );
  }

  async saveEdge(edge: any) {
    return this.db.query(
      "INSERT INTO legal_edges (from_node, to_node, relation_type) VALUES ($1,$2,$3)",
      [edge.from, edge.to, edge.type]
    );
  }
}
