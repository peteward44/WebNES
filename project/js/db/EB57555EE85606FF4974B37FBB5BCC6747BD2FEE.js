this.NesDb = this.NesDb || {};

NesDb[ 'EB57555EE85606FF4974B37FBB5BCC6747BD2FEE' ] = {
	"$": {
		"name": "Honoo no Toukyuuji: Dodge Danpei 2",
		"altname": "炎の闘球児 ドッジ弾平２",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-DD2-6800",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1993-03-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A4E935DF",
				"sha1": "EB57555EE85606FF4974B37FBB5BCC6747BD2FEE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-04"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-FME-7",
						"pcb": "DD2-E301",
						"mapper": "69"
					},
					"prg": [
						{
							"$": {
								"name": "DD2-PRG",
								"size": "256k",
								"crc": "FEAC6916",
								"sha1": "31B0C5BE4394269433D5100502BBF9B92A0C22B7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DD2-CHR",
								"size": "256k",
								"crc": "C7983622",
								"sha1": "F49DA40A7A2EE17FD454B668F448F91A81A1EB4B"
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
								"type": "FME-7"
							}
						}
					]
				}
			]
		}
	]
};
