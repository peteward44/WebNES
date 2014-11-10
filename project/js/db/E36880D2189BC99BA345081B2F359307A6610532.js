this.NesDb = this.NesDb || {};

NesDb[ 'E36880D2189BC99BA345081B2F359307A6610532' ] = {
	"$": {
		"name": "Geimos",
		"altname": "ゲイモス",
		"class": "Licensed",
		"catalog": "HSP-02",
		"publisher": "ASCII",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1985-08-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1DBD1D2B",
				"sha1": "E36880D2189BC99BA345081B2F359307A6610532",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "HVC-NROM-256K-02",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-02-0 PRG",
								"size": "32k",
								"crc": "3C5A512B",
								"sha1": "EC6101D07A6F7FF8A8D2227C2E7E6ADD3393D4C7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-02-0 CHR",
								"size": "8k",
								"crc": "8E757FB5",
								"sha1": "0BEA7BE790A5B10A91AFD9526D39901B66E3B73F"
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
