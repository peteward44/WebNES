this.NesDb = this.NesDb || {};

NesDb[ '97B4553899C7FD7076F5C93652664B22A7685636' ] = {
	"$": {
		"name": "Challenge of the Dragon",
		"class": "Unlicensed",
		"catalog": "CDR-CN-81014",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D188963D",
				"sha1": "97B4553899C7FD7076F5C93652664B22A7685636",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVB",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "CHALLENGE DRAGON 512KPRG",
								"size": "64k",
								"crc": "CA114AAC",
								"sha1": "84DA19F67908F19D2377E2F45FA77BC47BC0CA89"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHALLENGE DRAGON 512KVID",
								"size": "64k",
								"crc": "1C56855F",
								"sha1": "B28D5A4CA9AE72493F8115B798FA501F2E83789F"
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
								"type": "CIC Stun"
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
