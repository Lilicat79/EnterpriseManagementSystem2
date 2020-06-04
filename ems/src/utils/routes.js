import Department from '../pages/Department/Department'
import PersonalPlan from '../pages/PersonalPlan/PersonalPlan'
import Personnel from '../pages/Personnel/Personnel'
import Project from '../pages/Project/Project'
const routers = [
    {
        name:'人员',
        path:'/Personnel',
        component:Personnel
    },
    {
        name:'项目',
        path:'/Project',
        component:Project
    },
    {
        name:'部门',
        path:'/Department',
        component:Department
    },
    {
        name:'个人计划',
        path:'/PersonalPlan',
        component:PersonalPlan
    },

];
export default routers;