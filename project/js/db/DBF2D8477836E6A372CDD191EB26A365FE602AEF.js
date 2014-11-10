this.NesDb = this.NesDb || {};

NesDb[ 'DBF2D8477836E6A372CDD191EB26A365FE602AEF' ] = {
	"$": {
		"name": "Base Wars: Cyber Stadium Series",
		"class": "Licensed",
		"catalog": "NES-5B-USA",
		"publisher": "Ultra Games",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F00584B6",
				"sha1": "DBF2D8477836E6A372CDD191EB26A365FE602AEF",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-03-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-5B-0 PRG",
								"size": "128k",
								"crc": "EFFD40C3",
								"sha1": "D50314AB38F1F173E64D680786DC7874332F9F4E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-5B-0 CHR",
								"size": "128k",
								"crc": "4E4A3A8B",
								"sha1": "1AE8122CC0B70C2B6E7E96F1A706E69AF5CD43D8"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
