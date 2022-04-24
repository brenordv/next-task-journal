import {FC, ReactNode, useState} from "react";
import {Button, Typography} from "antd";

interface TextExpandableStateInterface {
    expanded: boolean;
    fakeId: number;
}

export interface TextExpandableProps {
    children: ReactNode;
    width?: number;
    expandText?: string;
    collapseText?: string;
}

export const TextExpandable: FC<TextExpandableProps> = ({
                                                            children,
                                                            width = 350,
                                                            expandText = "more",
                                                            collapseText = "less"
                                                        }) => {
    const [paragraphState, setParagraphState] = useState({expanded: false, fakeId: 0} as TextExpandableStateInterface);

    const switchState = (expanded: boolean) => {
        const newState: TextExpandableStateInterface = {
            expanded: expanded,
            fakeId: paragraphState.expanded ? ++paragraphState.fakeId : paragraphState.fakeId
        };
        setParagraphState((prevState: TextExpandableStateInterface) => ({...prevState, ...newState}));
        console.log(paragraphState, newState);
    }

    const onExpand = () => {
        switchState(true);
    }

    const onClose = () => {
        switchState(false);
    }

    return <Typography.Paragraph
        key={paragraphState.fakeId}
        style={{width}}
        ellipsis={{
            rows: 1,
            expandable: true,
            symbol: expandText,
            onExpand
        }}>
        {children}
        {paragraphState.expanded ? <Button type="link" onClick={onClose}>{collapseText}</Button> : null}
    </Typography.Paragraph>
}