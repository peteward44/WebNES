this.NesDb = this.NesDb || {};

NesDb[ 'F0211489E4D6ED6AC923F343E89ADAF930CF76C8' ] = {
	"$": {
		"name": "RoboCop 2",
		"class": "Licensed",
		"catalog": "NES-2C-USA",
		"publisher": "Data East",
		"developer": "Ocean",
		"region": "USA",
		"players": "1",
		"date": "1991-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B4CDF95F",
				"sha1": "F0211489E4D6ED6AC923F343E89ADAF930CF76C8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2C-0 PRG",
								"size": "128k",
								"crc": "03048E92",
								"sha1": "6BABA28612DB1757CD8ADE32D8375C6EB32CD168"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2C-0 CHR",
								"size": "128k",
								"crc": "086FBCB2",
								"sha1": "5CB45F505AB822BB41664F0444E31BE3883AE14F"
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
