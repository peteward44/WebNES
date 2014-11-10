this.NesDb = this.NesDb || {};

NesDb[ '5659D62879EFCB0A9D103862D8A4CC0ECACA62CD' ] = {
	"$": {
		"name": "Taito Chase H.Q.",
		"altname": "タイトーチェイスＨ．Ｑ．",
		"class": "Licensed",
		"catalog": "DTF-H9 (28)",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "99D38676",
				"sha1": "5659D62879EFCB0A9D103862D8A4CC0ECACA62CD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TL1ROM",
						"pcb": "HVC-TL1ROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "DTF-H9-0 PRG",
								"size": "128k",
								"crc": "ECFD3C69",
								"sha1": "A9E3D812ED897FDA80DE5A1672F8ED4AA19D3DA3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DTF-H9-0 CHR",
								"size": "128k",
								"crc": "B74308DE",
								"sha1": "40DAA90FEBBDC7BA5475D0B832B0B259A41E5BB8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
