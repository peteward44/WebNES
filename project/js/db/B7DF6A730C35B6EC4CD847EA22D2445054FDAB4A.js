this.NesDb = this.NesDb || {};

NesDb[ 'B7DF6A730C35B6EC4CD847EA22D2445054FDAB4A' ] = {
	"$": {
		"name": "Castle of Deceit",
		"class": "Unlicensed",
		"catalog": "BNH-C-04",
		"publisher": "Bunch Games",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "345D3A1A",
				"sha1": "B7DF6A730C35B6EC4CD847EA22D2445054FDAB4A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-18"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVC",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "CASTLE PRG",
								"size": "64k",
								"crc": "D377CC36",
								"sha1": "77F0FE8D04488C5D9F5223C4C0DC241D0EE0D657"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CASTLE VID",
								"size": "64k",
								"crc": "92A4B6B0",
								"sha1": "F0C762CDB6E2EF0A31771C6D517D259C15B84B00"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "7660"
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
