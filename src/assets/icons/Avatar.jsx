import React from "react"

const Avatar = ({ classes, color = "#038CB7" }) => (
	<svg
		className={classes}
		width="31"
		height="31"
		viewBox="0 0 31 31"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="0.329834"
			y="0.685669"
			width="29.8768"
			height="29.8768"
			rx="14.9384"
			fill={color}
		/>
		<path
			d="M7.80256 11.023H9.67576L12.1844 17.146H12.2834L14.792 11.023H16.6652V19.4731H15.1963V13.6678H15.1179L12.7826 19.4483H11.6851L9.34981 13.6554H9.27142V19.4731H7.80256V11.023ZM20.0897 19.601C19.6881 19.601 19.3264 19.5294 19.0046 19.3864C18.6855 19.2406 18.4325 19.0261 18.2454 18.7428C18.0611 18.4594 17.969 18.1101 17.969 17.6948C17.969 17.3372 18.035 17.0415 18.167 16.8077C18.2991 16.5739 18.4792 16.3868 18.7075 16.2465C18.9358 16.1063 19.193 16.0003 19.4791 15.9288C19.7679 15.8546 20.0664 15.8009 20.3744 15.7679C20.7458 15.7294 21.047 15.695 21.278 15.6648C21.5091 15.6318 21.6769 15.5823 21.7814 15.5162C21.8887 15.4475 21.9423 15.3416 21.9423 15.1985V15.1738C21.9423 14.863 21.8502 14.6223 21.6659 14.4517C21.4816 14.2812 21.2161 14.1959 20.8696 14.1959C20.5037 14.1959 20.2135 14.2757 19.999 14.4352C19.7872 14.5948 19.6441 14.7832 19.5699 15.0005L18.1753 14.8024C18.2853 14.4173 18.4669 14.0955 18.7199 13.837C18.973 13.5756 19.2824 13.3803 19.6483 13.2511C20.0141 13.119 20.4184 13.053 20.8613 13.053C21.1666 13.053 21.4706 13.0888 21.7731 13.1603C22.0757 13.2318 22.3522 13.3501 22.6025 13.5151C22.8528 13.6774 23.0536 13.8988 23.2049 14.1794C23.3589 14.46 23.4359 14.8107 23.4359 15.2315V19.4731H22.0001V18.6025H21.9506C21.8598 18.7785 21.7319 18.9436 21.5668 19.0976C21.4046 19.2489 21.1996 19.3713 20.9521 19.4648C20.7073 19.5556 20.4198 19.601 20.0897 19.601ZM20.4776 18.5034C20.7774 18.5034 21.0373 18.4443 21.2574 18.326C21.4775 18.205 21.6466 18.0455 21.7649 17.8474C21.8859 17.6494 21.9464 17.4334 21.9464 17.1996V16.4528C21.8997 16.4913 21.8199 16.5271 21.7071 16.5601C21.5971 16.5931 21.4733 16.622 21.3358 16.6468C21.1983 16.6715 21.0621 16.6935 20.9273 16.7128C20.7925 16.732 20.6756 16.7485 20.5766 16.7623C20.3538 16.7925 20.1544 16.8421 19.9783 16.9108C19.8023 16.9796 19.6634 17.0759 19.5616 17.1996C19.4598 17.3207 19.409 17.4775 19.409 17.67C19.409 17.9451 19.5094 18.1527 19.7102 18.293C19.911 18.4333 20.1668 18.5034 20.4776 18.5034Z"
			fill="white"
		/>
	</svg>
)

export default Avatar
