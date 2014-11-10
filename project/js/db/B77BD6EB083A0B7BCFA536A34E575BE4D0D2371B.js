this.NesDb = this.NesDb || {};

NesDb[ 'B77BD6EB083A0B7BCFA536A34E575BE4D0D2371B' ] = {
	"$": {
		"name": "Secret Scout in the Temple of Demise",
		"class": "Unlicensed",
		"catalog": "CDR-ST-81024",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "973BBF75",
				"sha1": "B77BD6EB083A0B7BCFA536A34E575BE4D0D2371B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
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
								"name": "SECRET SCOUT 512K PRG",
								"size": "64k",
								"crc": "50734772",
								"sha1": "DCECC846456244DB91D4C59B05EE3B1E46D0E9A3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SECRET SCOUT 512K VID.",
								"size": "64k",
								"crc": "C1DE9C94",
								"sha1": "5D945DBE1FC95DCDFA2E499E730FC8C50204C928"
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
