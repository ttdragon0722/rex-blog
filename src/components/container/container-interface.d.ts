interface ContainerProp {
	/**
	 * children component
	 */
	children?: React.ReactNode;

	/**
	 * component id
	 */
	id?: string | undefined;

	/**
	 * component class
	 */
	className?: string | undefined;
    /**
     * component css
     */
	style?: React.CSSProperties | undefined;
}

export { ContainerProp };
