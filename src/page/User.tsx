import { component, mixin, watch, attribute, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { TabView, TabPanel } from 'boot-cell/source/Content/TabView';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { BGIcon } from 'boot-cell/source/Reminder/FAIcon';

import { ActivityCard } from '../component';
import { Provider, user, Registration } from '../model';
import style from './User.module.less';

const provider_list = Object.entries(Provider).filter(([key]) => isNaN(+key)),
    provider_link = {
        github: (name: string) => 'https://github.com/' + name,
        qq: (name: string) => 'https://user.qzone.qq.com/' + name,
        weibo: (name: string) => 'https://weibo.com/' + name
    };

@observer
@component({
    tagName: 'user-page',
    renderTarget: 'children'
})
export class UserPage extends mixin() {
    @attribute
    @watch
    uid = '';

    connectedCallback() {
        this.classList.add('d-block', 'py-5');
        this.style.background =
            'url(https://hacking.kaiyuanshe.cn/static/pic/profile-back-pattern.png)';

        user.getOne(this.uid);

        super.connectedCallback();
    }

    renderIcon = ([key, name]: string[]) => {
        const { name: userName, provider } = user.current;

        return (
            <a target="_blank" href={provider_link[key]?.(userName)}>
                <BGIcon
                    type="square"
                    kind="brands"
                    name={name}
                    size="lg"
                    color={provider === key ? 'success' : 'secondary'}
                />
            </a>
        );
    };

    renderLikes = ({
        hackathon_info: { banners, display_name, name }
    }: Registration) => (
        <li>
            <a
                className={style.picture}
                style={{ backgroundImage: `url(${banners[0]})` }}
                title={display_name}
                href={'activity?name=' + name}
            />
        </li>
    );

    render() {
        const {
            nickname,
            avatar_url,
            profile,
            likes,
            registrations
        } = user.current;

        return (
            <div className="container d-lg-flex">
                <div className="border bg-white mr-lg-3 mb-3 mb-lg-0">
                    <header className="p-3">
                        <h2>{nickname}</h2>
                        <div className="d-flex">
                            <img className={style.avatar} src={avatar_url} />
                            <span className="text-nowrap">
                                {profile?.career_type}
                            </span>
                        </div>
                    </header>
                    <div className="p-3 border-top text-nowrap">
                        {provider_list.map(this.renderIcon)}
                    </div>
                    <div className="p-3 border-top">
                        <h6>
                            <BGIcon
                                type="square"
                                name="thumbtack"
                                color="secondary"
                            />
                            关注的活动
                        </h6>
                        <ul className="list-unstyled">
                            {likes?.map(this.renderLikes)}
                        </ul>
                    </div>
                </div>
                <TabView>
                    <NavLink>TA 参与的活动</NavLink>
                    <TabPanel
                        className="border border-top-0 bg-white p-3 d-flex flex-wrap justify-content-around"
                        style={{ marginTop: '-0.5rem' }}
                    >
                        {registrations?.map(({ hackathon_info }) => (
                            <ActivityCard {...hackathon_info} />
                        ))}
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
