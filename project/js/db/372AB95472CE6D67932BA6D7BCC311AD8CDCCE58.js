this.NesDb = this.NesDb || {};

NesDb[ '372AB95472CE6D67932BA6D7BCC311AD8CDCCE58' ] = {
	"$": {
		"name": "Taro's Quest",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-5Q-USA",
		"publisher": "Jaleco",
		"developer": "NMK",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "A058219D",
				"sha1": "372AB95472CE6D67932BA6D7BCC311AD8CDCCE58",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TA.Q PRG",
								"size": "128k",
								"crc": "5CC2571F",
								"sha1": "607442096217DB78CBDCC8B8EE59930EBF376C17"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TA.Q.CHR",
								"size": "128k",
								"crc": "E71A0D27",
								"sha1": "E1190069B201CD2607FB6BD4F2AD755F98C78822"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
