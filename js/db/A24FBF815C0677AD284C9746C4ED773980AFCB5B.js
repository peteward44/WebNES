this.NesDb = this.NesDb || {};

NesDb[ 'A24FBF815C0677AD284C9746C4ED773980AFCB5B' ] = {
	"$": {
		"name": "Desert Commander",
		"class": "Licensed",
		"catalog": "NES-DF-USA",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "USA",
		"players": "2",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "68EC97CB",
				"sha1": "A24FBF815C0677AD284C9746C4ED773980AFCB5B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DF-0 PRG",
								"size": "128k",
								"crc": "54430B24",
								"sha1": "9296C4F9A0795BA23616231EEC69F4FDE0241183"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-DF-0 CHR",
								"size": "128k",
								"crc": "F2AF687F",
								"sha1": "57318920E02164453E75F224ED10928A69306541"
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
