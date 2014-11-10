this.NesDb = this.NesDb || {};

NesDb[ 'CD8F5B0A10A3EDA8ABA5B5BFB96EF9870AB53A43' ] = {
	"$": {
		"name": "Volley Ball",
		"class": "Unlicensed",
		"catalog": "MGC-010",
		"publisher": "Gluk Video",
		"developer": "Idea-Tek",
		"region": "Spain",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL",
				"crc": "A23CB659",
				"sha1": "CD8F5B0A10A3EDA8ABA5B5BFB96EF9870AB53A43",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2010-05-23"
			},
			"board": [
				{
					"$": {
						"type": "TXC-74*138/175",
						"pcb": "01-22000-400",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "04-01021-000",
								"size": "32k",
								"crc": "42812DAE",
								"sha1": "99C14BF5B80EAFC0D94D966D4DE21CEA7B6DF1D3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "04-01021-010",
								"size": "32k",
								"crc": "382E6A7B",
								"sha1": "9C344A8CED4073A95EF35E10DFC49A38389D2B11"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
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
