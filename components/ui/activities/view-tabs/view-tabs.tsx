import {FC} from "react";
import {Button, Tabs} from "antd";
import {AppstoreOutlined, OrderedListOutlined, ReloadOutlined} from "@ant-design/icons";
import {ActivitySummaryFlat} from "../../../../lib/models/activity";
import {ActivitiesTableView} from "./table-view/table-view";
import {ActivitiesBoardView} from "./board-view/board-view";

const {TabPane} = Tabs;

export const ActivityViewTabs: FC<{ activities: ActivitySummaryFlat[] }> = ({activities}) => {
    const OperationsSlot = {
        right: <Button icon={<ReloadOutlined/>}>Refresh</Button>,
    };
    return (
        <Tabs defaultActiveKey="1" tabBarExtraContent={OperationsSlot}>
            <TabPane
                tab={
                    <span>
          <OrderedListOutlined/>
          Table View
                    </span>
                }
                key="1"
            >
                <ActivitiesTableView activities={activities}/>
            </TabPane>
            <TabPane
                tab={
                    <span>
          <AppstoreOutlined/>
          Board View
        </span>
                }
                key="2"
            >
                <ActivitiesBoardView  activities={activities}/>
            </TabPane>
        </Tabs>
    );
}