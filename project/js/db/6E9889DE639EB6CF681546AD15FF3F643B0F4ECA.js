this.NesDb = this.NesDb || {};

NesDb[ '6E9889DE639EB6CF681546AD15FF3F643B0F4ECA' ] = {
	"$": {
		"name": "Erunaaku no Zaihou",
		"altname": "エルナークの財宝",
		"class": "Licensed",
		"catalog": "TCC-EL",
		"publisher": "Towa Chiki",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F450DB3A",
				"sha1": "6E9889DE639EB6CF681546AD15FF3F643B0F4ECA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TCC-EL-0 PRG",
								"size": "128k",
								"crc": "F450DB3A",
								"sha1": "6E9889DE639EB6CF681546AD15FF3F643B0F4ECA"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
