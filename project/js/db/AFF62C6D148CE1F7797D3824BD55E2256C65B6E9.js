this.NesDb = this.NesDb || {};

NesDb[ 'AFF62C6D148CE1F7797D3824BD55E2256C65B6E9' ] = {
	"$": {
		"name": "Chessmaster, The",
		"class": "Licensed",
		"catalog": "NES-EM-GPS",
		"publisher": "Nintendo",
		"developer": "The Software Toolworks",
		"region": "Europe",
		"players": "2",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "E3027EBE",
				"sha1": "AFF62C6D148CE1F7797D3824BD55E2256C65B6E9",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SJROM",
						"pcb": "NES-SJROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-EM-0 PRG",
								"size": "128k",
								"crc": "64C97986",
								"sha1": "B61DB944C3597982E3D5F65945C88369FD8B6371"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-EM-0 CHR",
								"size": "32k",
								"crc": "4C622266",
								"sha1": "55CD255BD10590A88287F29CF4E98417F8DC85C3"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
