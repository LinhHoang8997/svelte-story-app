export default {
    "name": "KalChapter",
    "kind": "HoudiniQuery",
    "hash": "27158a831f3267ce080a5bd6fb38424f9675a837bccc22dd9e77326bb212a116",

    "raw": `query KalChapter {
  chapters(filters: {slug: {eq: "a-fake-chat-gpt-story-about-kal-tsit"}}) {
    data {
      id
      attributes {
        title
        content
        slug
        chapter_header_media {
          id
          hero_image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
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
                "keyRaw": "chapters(filters: {slug: {eq: \"a-fake-chat-gpt-story-about-kal-tsit\"}})",
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

                                                "content": {
                                                    "type": "String",
                                                    "keyRaw": "content",
                                                    "nullable": true
                                                },

                                                "slug": {
                                                    "type": "String",
                                                    "keyRaw": "slug",
                                                    "nullable": true
                                                },

                                                "chapter_header_media": {
                                                    "type": "ComponentMultimediaHeaderMedia",
                                                    "keyRaw": "chapter_header_media",
                                                    "nullable": true,

                                                    "selection": {
                                                        "fields": {
                                                            "id": {
                                                                "type": "ID",
                                                                "keyRaw": "id"
                                                            },

                                                            "hero_image": {
                                                                "type": "UploadFileEntityResponse",
                                                                "keyRaw": "hero_image",
                                                                "nullable": true,

                                                                "selection": {
                                                                    "fields": {
                                                                        "data": {
                                                                            "type": "UploadFileEntity",
                                                                            "keyRaw": "data",
                                                                            "nullable": true,

                                                                            "selection": {
                                                                                "fields": {
                                                                                    "id": {
                                                                                        "type": "ID",
                                                                                        "keyRaw": "id",
                                                                                        "nullable": true
                                                                                    },

                                                                                    "attributes": {
                                                                                        "type": "UploadFile",
                                                                                        "keyRaw": "attributes",
                                                                                        "nullable": true,

                                                                                        "selection": {
                                                                                            "fields": {
                                                                                                "url": {
                                                                                                    "type": "String",
                                                                                                    "keyRaw": "url"
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

"HoudiniHash=27158a831f3267ce080a5bd6fb38424f9675a837bccc22dd9e77326bb212a116";