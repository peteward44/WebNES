this.NesDb = this.NesDb || {};

NesDb[ 'B116BBAA57C1D3FCDCE0CDE22290FA92C7D8418E' ] = {
	"$": {
		"name": "Tecmo Baseball",
		"class": "Licensed",
		"catalog": "NES-TL-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "2",
		"date": "1989-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AD12A34F",
				"sha1": "B116BBAA57C1D3FCDCE0CDE22290FA92C7D8418E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-TL-0 PRG",
								"size": "128k",
								"crc": "AD12A34F",
								"sha1": "B116BBAA57C1D3FCDCE0CDE22290FA92C7D8418E"
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
								"type": "MMC1B1-H"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AD12A34F",
				"sha1": "B116BBAA57C1D3FCDCE0CDE22290FA92C7D8418E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-TL-0 PRG",
								"size": "128k",
								"crc": "AD12A34F",
								"sha1": "B116BBAA57C1D3FCDCE0CDE22290FA92C7D8418E"
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
								"type": "MMC1A"
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
