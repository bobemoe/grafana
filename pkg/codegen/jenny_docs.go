package codegen

import (
	"bytes"
	"cuelang.org/go/cue/cuecontext"
	"encoding/json"
	"github.com/grafana/codejen"
	"github.com/grafana/thema/encoding/jsonschema"
)

const docsPath = "../../../docs/sources/developers/kinds/"

type DocsJenny struct{}

func (j DocsJenny) JennyName() string {
	return "DocsJenny"
}

func (j DocsJenny) Generate(sfg SchemaForGen) (*codejen.File, error) {
	f, err := jsonschema.GenerateSchema(sfg.Schema.Lineage().Latest())
	if err != nil {
		return nil, err
	}

	b, _ := cuecontext.New().BuildFile(f).MarshalJSON()
	nb := new(bytes.Buffer)
	err = json.Indent(nb, b, "", "  ")
	//bytes, err := format.Node(f, format.TabIndent(true))
	//if err != nil {
	//	return nil, err
	//}

	return codejen.NewFile(docsPath+sfg.Schema.Lineage().Name()+"_docs.json", nb.Bytes(), j), nil
}
