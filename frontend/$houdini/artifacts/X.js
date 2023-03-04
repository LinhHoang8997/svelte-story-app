export default {
    "name": "X",
    "kind": "HoudiniQuery",
    "hash": "e222bee23c3b5a2f8cc06837c98d575aaf538fa8ef7cea23cb62c53ece11a45f",

    "raw": `query X {
  chapters {
    data {
      id
      attributes {
        title
        slug
      }
    }
    meta {
      pagination {
        page
        pageSize
        total
        pageCount
      }
    }
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "chapters": {
                "type": "ChapterEntityResponseCollection",
                "keyRaw": "chapters",
                "nullable": true,

                "selection": {
                    "fields": {
                        "data": {
                            "type": "ChapterEntity",
                            "keyRaw": "data",

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "nullable": true
                                    },

                                    "attributes": {
                                        "type": "Chapter",
                                        "keyRaw": "attributes",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "title": {
                                                    "type": "String",
                                                    "keyRaw": "title"
                                                },

                                                "slug": {
                                                    "type": "String",
                                                    "keyRaw": "slug",
                                                    "nullable": true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        "meta": {
                            "type": "ResponseCollectionMeta",
                            "keyRaw": "meta",

                            "selection": {
                                "fields": {
                                    "pagination": {
                                        "type": "Pagination",
                                        "keyRaw": "pagination",

                                        "selection": {
                                            "fields": {
                                                "page": {
                                                    "type": "Int",
                                                    "keyRaw": "page"
                                                },

                                                "pageSize": {
                                                    "type": "Int",
                                                    "keyRaw": "pageSize"
                                                },

                                                "total": {
                                                    "type": "Int",
                                                    "keyRaw": "total"
                                                },

                                                "pageCount": {
                                                    "type": "Int",
                                                    "keyRaw": "pageCount"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {
            "isManualLoad": true
        }
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=e222bee23c3b5a2f8cc06837c98d575aaf538fa8ef7cea23cb62c53ece11a45f";